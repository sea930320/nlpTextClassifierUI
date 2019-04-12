import { Component, OnInit } from '@angular/core';
import { LigacaoService } from '../../../shared/_api/ligacao.service';

import { GlobalConstants } from '../../../shared/_constants/global.constants';
import * as _ from 'lodash';
import swal from 'sweetalert2';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-ligacaos-classify',
  templateUrl: './ligacaos-classify.component.html',
  styleUrls: ['./ligacaos-classify.component.scss']
})
export class LigacaosClassifyComponent implements OnInit {
  curPage = 1;
  collectionSize = 0
  ligacaos = [];
  itemsPerPage = 10;
  filter = ''
  newLigacao = {
    feitas: {}
  }

  constructor(public constants: GlobalConstants, private ligacaoService: LigacaoService, public toastr: ToastsManager) {
    this.fetchLigacaos();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  fetchLigacaos() {
    this.ligacaoService.getLigacaos({
      page: this.curPage,
      per_page: this.itemsPerPage,
      filter: this.filter
    })
      .subscribe((res: any) => {
        this.ligacaos = res.ligacaos.data.map((data) => {
          if (!data.feitas) {
            data.feitas = {
              avaliacao: ""
            }
          }
          return data
        })
        this.collectionSize = Number(res.ligacaos.total)
      })
  }

  debFetchLigacaos = _.debounce(() => {
    this.fetchLigacaos()
  }, 500)

  triggerEdit(ligacao) {
    if (ligacao.edit) {
      this.updateLigacao(ligacao)
    }
    ligacao.edit = ligacao.edit ? false : true
  }

  triggerDelete(ligacao) {
    if (ligacao.edit) {
      ligacao.edit = false
      return
    }
    swal({
      title: 'Are you sure?',
      text: "You won't be able to recover this Ligacao!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0CC27E',
      cancelButtonColor: '#FF586B',
      confirmButtonText: 'Yes',
      cancelButtonText: "No"
    }).then((isConfirm) => {
      if (isConfirm && isConfirm.value === true) {
        this.ligacaoService.deleteLigacao(ligacao.id)
          .subscribe((res: any) => {
            this.fetchLigacaos()
          }, (err) => {
            this.toastr.error(err.error.message, 'Error');
          })
      }
    }).catch(swal.noop);
  }

  updateLigacao(ligacao) {
    this.ligacaoService.updateLigacao(ligacao.id, ligacao)
      .subscribe((res: any) => {
        ligacao = Object.assign({}, res.ligacao)
        this.toastr.success(res.message, 'Success');
      }, (err) => {
        if (err.error.status && err.error.status.length > 0) {
          this.toastr.error(err.error.status[0], 'Error');
        } else {
          this.toastr.error('Server issue', 'Error');
        }
        this.fetchLigacaos()
      })
  }

  triggerAdd() {
    this.ligacaoService.storeLigacao(this.newLigacao)
      .subscribe((res: any) => {
        this.fetchLigacaos()
        this.toastr.success(res.message, 'Success');
        this.newLigacao = {
          feitas: {}
        }
      }, (err) => {
        this.fetchLigacaos()
        if (err.error.status && err.error.status.length > 0) {
          this.toastr.error(err.error.status[0], 'Error');
        } else {
          this.toastr.error('Server issue', 'Error');
        }
        this.newLigacao = {
          feitas: {}
        }
      })
  }
}
