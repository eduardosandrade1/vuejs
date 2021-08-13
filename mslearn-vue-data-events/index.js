const app = Vue.createApp({
    // a todo momento da página
    data() {
        return {
            product: {
                name: 'Cruise to the moon',
                description: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
                image: {
                    src: 'assets/cruise.jpg',
                    description: 'An astronaut floats outside the window while you sit in comfort',
                    style: { 'border-radius': '15px' },
                },
                cabins: [
                    { name: 'Coach', price: 125000 },
                    { name: 'Business', price: 275000 },
                    { name: 'First', price: 430000 },
                ]
            },
            booking: {
                cabinIndex: 0,
                notes: '',
                completed: false
            }
        }
    },

    // TODO: Add completed values
    // funções que montam a tratativa dos dados
    computed: {
        bookingCabinDisplay() {
            const cabin = this.product.cabins[this.booking.cabinIndex];
            return `${cabin.name}: $ ${cabin.price.toLocaleString('pt-BR')}`
        }
    },


    // TODO: Add methods
    // métodos para o front-end
    methods : {
        bookCabin(){
            this.booking.completed = true;
        },
        teste(){
            console.log(this.product.name)
        }
    }
});
