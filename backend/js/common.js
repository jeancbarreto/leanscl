var getInfo = new function(){
    
};

var header = new Vue({
    el: "#text-jumbotron-data",
    data: {
        title: 'Lean´s',
        img: '../assets/logosLEANS.png',
        description: 'Empresa de diseño original y enfocado a la moda urbana'
    }
})

var productos = new Vue({
    el: "#productos",
    data: {
        component:[]
    },
    created(){
        this.getProducts();
    },
    methods:{
        getProducts(){
            fetch('http://localhost:3000/api/v1/productos/all')
            .then((resp) => resp.json()) // Transform the data into json
            .then((data) => {
                var products = data.data[0].Producto;
                products.map((element, index) => {
                    element.HtmlContent = '<div class="card"><img class="card-img-top img-fluid img-responsive" src="'+element.foto+'" alt="Card image cap"><div class="card-body"><h5 class="card-title">' + element.Nombre + '</h5><p class="card-text">'+element.Descripcion+'</p><p>Precio: '+element.Monto+'</p><a href="#" class="btn btn-primary">Ver más</a></div></div>';
                })
                this.component = products;
              }).catch((err) => {
                  console.log('error',err);
              })
        }
    },
    
})