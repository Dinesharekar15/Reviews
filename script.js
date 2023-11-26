const reviews=[
    {
        id:1,
        name:'Dinesh Arekar',
        job:'Web Developer',
        img:'images/me.jpeg',
        text:'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
    },
    
    {
        id:2,
        name:'Vishal Babar',
        job:'Web Developer',
        img:'images/vishal (1).jpeg',
        text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id:3,
        name:'Vishwas Babar',
        job:'Web Developer',
        img:'images/vishwas.jpeg',
        text:'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'

    },
    {
        id:4,
        name:'Vivek Mhaske',
        job:'UI Designer',
        img:'images/vivek.jpg.jpg',
        text:'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.'
    },
    {
        id:5,
        name:'Rohan Patange',
        job:'backend developer',
        img:'images/rohan.jpg.jpg',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti illum provident vitae eos minima iste harum et tenetur, ratione, error exercitationem eveniet ad non! At nemo consequatur suscipit vero.'
    }
    
]




const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const preBtn = document.querySelector('.pre-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentitem=0;

window.addEventListener('DOMContentLoaded',function(){
   selectperson();
});

function selectperson(){
   const item=reviews[currentitem];
   img.src = item.img; 
   author.textContent=item.name;
   job.textContent=item.job;
   info.textContent=item.text;
}

nextBtn.addEventListener("click",function(){
    currentitem ++;
    if(currentitem >reviews.length-1){
        currentitem =0;
    }
    selectperson();
})
preBtn.addEventListener("click",function(){
    currentitem --;
    if(currentitem <0){
        currentitem =reviews.length-1;
    }
    selectperson();
})


randomBtn.addEventListener('click', function(){
    currentitem =randomone();
    selectperson();
    console.log(currentitem);
})


function randomone(){
   return Math.floor(Math.random()*reviews.length)
}