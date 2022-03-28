
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'boxicons/css/boxicons.min.css';
import './index.css';
import './main.scss';
import Student from './components/Student';
import Teacher from './components/Teacher';
import axios from 'axios';



getProducts();

function getProducts() {

     

    axios.get('http://localhost:5050/products').then( res => {
        
        const plist = document.querySelector('.p-list');
        let list = '';
        res.data.map( data => {

            let {name, price, sale_price, photo} = data;
            list += `
                <div class="col-md-3">
                    <div class="card shadow mb-2">
                        <img class="card-img img-thumbnail" src="${photo}" alt="">
                        <div class="card-body">
                            <div class="content">
                                <h3>${name}</h3>
                                <p class="orginal-price"> <strong>Price:</strong> BDT <span>${price}</span></p>
                                <p class="sale-price"> <strong>Sale Price:</strong> BDT ${sale_price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            `;
        });

        plist.innerHTML = list;
    })
}


