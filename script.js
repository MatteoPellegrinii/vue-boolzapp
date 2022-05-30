
const contacts= new Vue({
    el: '#whatsapp',
    data : {
        activeContact : 0,
        newMessage : {
            message : "",
            status : 'sent',
            date: '10/01/2020 15:51:00'
        },
        newAnswer : {
            message : "ok",
            status : 'received',
            date: '10/01/2020 15:51:00'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Blank&hatColor=Blue03&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=CollarSweater&clotheColor=White&eyeType=Wink&eyebrowType=UpDown&mouthType=Eating&skinColor=Yellow',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hatColor=Black&facialHairType=BeardMajestic&facialHairColor=Platinum&clotheType=ShirtScoopNeck&clotheColor=Pink&eyeType=WinkWacky&eyebrowType=UnibrowNatural&mouthType=Concerned&skinColor=Yellow',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=MoustacheMagnum&facialHairColor=Blonde&clotheType=Overall&clotheColor=Black&eyeType=Cry&eyebrowType=RaisedExcited&mouthType=Sad&skinColor=Pale',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Wayfarers&hairColor=Brown&facialHairType=BeardMajestic&facialHairColor=Auburn&clotheType=ShirtScoopNeck&clotheColor=Black&eyeType=Squint&eyebrowType=FlatNatural&mouthType=Disbelief&skinColor=Black',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&accessoriesType=Blank&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=White&eyeType=Close&eyebrowType=AngryNatural&mouthType=Twinkle&skinColor=Yellow',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtScoopNeck&clotheColor=Red&eyeType=Cry&eyebrowType=SadConcerned&mouthType=Disbelief&skinColor=Pale',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Blank&hairColor=Platinum&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=ShirtScoopNeck&clotheColor=Gray02&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Disbelief&skinColor=Light',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Kurt&hairColor=Blonde&facialHairType=MoustacheFancy&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=Blue01&eyeType=Close&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Light',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
        
    },
    methods : {
        cambioContatto(numeroContatto){
            this.activeContact = numeroContatto;
        },
        newwrittenMessage(activeContact){
            if(this.NewMessage !== ""){
                this.contacts[activeContact].messages.push(this.newMessage);
                this.newMessage = {
                    message : "",
                    status : 'sent',
                    date: '10/01/2020 15:51:00'
                };
                setTimeout(this.answer, 1000)
            }
        },
        answer(activeContact){
            this.contacts[activeContact].messages.push(this.newAnswer);
            this.newAnswer = {
                message : "ok",
                status : 'received',
                date: '10/01/2020 15:51:00',
            };
        }
    }
});


