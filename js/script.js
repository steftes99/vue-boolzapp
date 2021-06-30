var app = new Vue ({
    el : '#app',
    data : { 
        contactActive: 0,
        contacts : [
            {
                name: 'Francesco',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '29/06/2021 14:45:21',
                        text: 'Stasera andiamo al cinema?',
                        status: 'received'
                    },
                    {
                        date: '29/06/2021 14:48:00',
                        text: 'Certo, voglio vedere il nuovo film della Marvel',
                        status: 'sent'
                    }
                ]
            },
            {
                name: 'Carla',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '28/06/2021 20:28:44',
                        text: 'Sei andato in palestra?',
                        status: 'received'
                    },
                    {
                        date: '28/06/2021 21:02:21',
                        text: 'Si, mi fa male tutto!',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Giovanni',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '27/06/2021 08:12:21',
                        text: 'Mi dai un passaggio in ufficio?',
                        status: 'received'
                    },
                    {
                        date: '28/06/2021 08:13:44',
                        text: 'Certo, tra 10 minuti sono da te',
                        status: 'sent' 
                    },
                ]
            },
            {
                name: 'Maria',
                avatar: '_io',
                visible: true,
                messages: [
                    {
                        date: '27/06/2021 14:12:43',
                        text: 'Come stai?',
                        status: 'received'
                    },
                    {
                        date: '28/06/2021 15:00:32',
                        text: 'Bene, tu?',
                        status: 'sent' 
                    }
                ]
            },
            {
                name: 'Luigi',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '27/06/2021 16:12:00',
                        text: 'Stasera calcetto, ci sei?',
                        status: 'received'
                    },
                    {
                        date: '28/06/2021 17:00:00',
                        text: 'Certo!',
                        status: 'sent' 
                    }
                ]
            }
        ]
    }, 
    methods: {
        setContactActive(indice){
            this.contactActive = indice;
            console.log(this.contactActive);
        }
    } 
})