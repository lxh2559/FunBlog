const topMenu = [
    {
        name: '笔记',
        key: 'noteMenu'
    }, {
        name: '文档',
        key: 'docMenu'
    }
];

const noteMenu = [
    {
        name: '说明',
        key: 'note_index'
    }, {
        name: '计算机基础',
        children: [
            {
                name: '说明',
                key: 'note_basis_index'
            }
        ]
    }, {
        name: '计算机网络',
        children: [
            {
                name: '说明',
                key: 'note_network_index'
            }
        ]
    }
];

const docMenu = [
    {
        name: '说明',
        key: 'doc_index'
    }, {
        name: 'uni-app',
        children: [
            {
                name: '说明',
                key: 'doc_uni_app_index'
            }
        ]
    }, {
        name: 'vue',
        children: [
            {
                name: '说明',
                key: 'doc_vue_index'
            }
        ]
    }
]

const sideMenu = {
    noteMenu: noteMenu,
    docMenu: docMenu
}

module.exports = {
    topMenu,
    sideMenu
}