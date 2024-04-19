//shapes
let rowShapes = document.getElementById('rowShapes')
function Shape(img, jp, en, cat, modal){
  this.img = img;
  this.jp = jp;
  this.en = en;
  this.cat = cat;
  this.modal = modal;
};
let s1 = new Shape('https://live.staticflickr.com/65535/53167662859_f8d6019a00_b.jpg', 'アトピー・キラー<br>本実目透し加工品','Honzane Mesukashi','Only Indoor Walls and Ceiling','shape1');
let s2 = new Shape('https://live.staticflickr.com/65535/53166872742_9295da528e_b.jpg', 'アトピー・キラー<br>本実加工品','Honzane','Only indoor Walls','shape2');
let s3 = new Shape('https://live.staticflickr.com/65535/53166872792_95447cf5ff_b.jpg', 'アトピー・キラー<br>本実9m/m長サネ加工品','Honzane 9m/m length','For Outside Walls','shape3');
let s4 = new Shape('https://live.staticflickr.com/65535/53167457076_77e620a211_b.jpg', '森呼吸', 'Shinkokyuu', 'Only for Floor', 'shape4');
let s5 = new Shape('https://live.staticflickr.com/65535/53167457086_6141a5e8d0_b.jpg', '森呼吸ハーフ', 'Half Shinkokyuu', 'Only for Floor', 'shape5');
let s6= new Shape('https://live.staticflickr.com/65535/53166872837_899613bda5_b.jpg', 'アトピー・キラー<br>アイジャクリ加工品', 'Aijakuri','For indoor and outside walls', 'shape6')
let s7 = new Shape('https://live.staticflickr.com/65535/53167662904_ecd4c6df67_b.jpg','アトピー・キラー<br>アイジャクリ目透し加工品','Aijakuri Mesukashi','For indoor and outside walls','shape7');
let s8 = new Shape('https://live.staticflickr.com/65535/53167662884_66dce90f9d_b.jpg','ドイツ下見加工品','Doitsushitami','For outside Walls','shape8');
let s9 = new Shape('https://live.staticflickr.com/65535/53167457061_2a0863750e_b.jpg','南京下見加工品','Nankinshitami','For outside Walls','shape9');
let s10 = new Shape('https://live.staticflickr.com/65535/53166872757_4b312acf72_b.jpg','南京下見加工品(実付)','Nankinshitami(tsuki)','For outside Walls','shape10');
let s11 = new Shape('https://live.staticflickr.com/65535/53167662814_152886e5f9_b.jpg','本実加工・木表表面荒木仕上げ<br>9m/m長サネ','Honzane・rough surface finish','For outside Walls','shape11')
let s12 = new Shape('https://live.staticflickr.com/65535/53187975914_84278cdb17_b.jpg','本実V溝目透しプレーナー仕上げ９ｍ/ｍ長サネ・2回通し加工制作','Honzane・V-groove opening・Double-through processing','For outside Walls','shape12')


let shapes = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12];
let tableShapes = shapes.forEach(elem =>{
let divShape = document.createElement("div")
divShape.innerHTML=`
<div class="col text-center">
  <div class="overflow-hidden" style="height: fit-content; width: fit-content">
  <img class="img" width="100%" src="${elem.img}" alt="" data-bs-toggle="modal" data-bs-target="#${elem.modal}">
  </div>
  <h5 class="fw-bold">${elem.jp}</h5>
  <h5 class="fw-bold">${elem.en}</h5>
  <p>${elem.cat}</p>
</div>
<div class="modal fade" id="${elem.modal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
       <div class="modal-body">
         <img width="100%" src="${elem.img}">
       </div>
      </div>
      <button type="button" class="btn-close position-absolute end-0" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
  </div>
`
let novoShape = rowShapes.appendChild(divShape)
});
//Material
let rowMaterial = document.getElementById('rowMaterial');
 let m1 = new Shape('https://live.staticflickr.com/65535/53167662804_7362ccc05d_b.jpg', 'Lジョイナー', 'Joina', 'Chair Rail', 'm1');
 let m2 = new Shape('https://live.staticflickr.com/65535/53166872722_0c6c7d8929_b.jpg','巾木','Habaki','Baseboard', 'm2');
 let m3 = new Shape('https://live.staticflickr.com/65535/53167894655_cfbeb80169_b.jpg','廻縁','Mawaribuchi','Crown molding', 'm3');
 let m4 = new Shape('https://live.staticflickr.com/65535/53167662759_a0a21e0fee_b.jpg','出隅','Desumi','Outside corner moulding', 'm4');
 let m5 = new Shape('https://live.staticflickr.com/65535/53167894645_3f3dfdc90d_b.jpg','入隅','Irisumi','Inside corner moulding', 'm5');
 let material = [m1,m2,m3,m4,m5];
let tableMaterial = material.forEach(elem =>{
let divMaterial = document.createElement("div")
divMaterial.innerHTML=`
<div class="col text-center">
  <div class="overflow-hidden" style="height: fit-content; width: fit-content">
    <img class="img" width="100%" src="${elem.img}" alt="" data-bs-toggle="modal" data-bs-target="#${elem.modal}">
  </div>
  <h5 class="fw-bold">${elem.jp}</h5>
  <h5 class="fw-bold">${elem.en}</h5>
  <p>${elem.cat}</p>
</div>
<div class="modal fade" id="${elem.modal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
       <div class="modal-body">
         <img width="100%" src="${elem.img}">
       </div>
      </div>
      <button type="button" class="btn-close position-absolute end-0" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
</div>
`
let novoMaterial = rowMaterial.appendChild(divMaterial)
});