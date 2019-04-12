// Smart DataTable

export var plSettings = {
    columns: {
        id: {
            title: 'ID',
        },
        name: {
            title: 'Full Name',
        },
        username: {
            title: 'User Name',
        },
        email: {
            title: 'Email',
        },
        action: {
            title: 'Action',
            filter: false,
            class: 'text-center',
            type: 'html',
            valuePrepareFunction: function () {
                return `<div class="text-center">
                    <a class="btn btn-raised mr-1 shadow-z-2 btn-success" onClick='onEdit()'>
                        <i class="fa fa-edit"></i>
                    </a>
                    <a class="btn btn-raised mr-1 shadow-z-2 btn-danger" (click)='onRemove()'>
                        <i class="fa fa-trash"></i>
                    </a>
                </div>`
            }
        }
    },
    actions: {
        add: false,
        edit: false,
        delete: false
    },
    attr: {
        class: "table table-responsive"
    },
};

export var plSource = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        notShownField: true,
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        notShownField: true,
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        notShownField: false,
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        notShownField: false,
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        notShownField: false,
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        notShownField: false,
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        notShownField: false,
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        notShownField: true,
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        notShownField: false,
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        notShownField: false,
    },
    {
        id: 11,
        name: 'Nicholas DuBuque',
        username: 'Nicholas.Stanton',
        email: 'Rey.Padberg@rosamond.biz',
        notShownField: true,
    }
];