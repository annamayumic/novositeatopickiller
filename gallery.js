let row = document.getElementById('row');
function Obj(img, cat, titulo, modal, imgmodal){
  this.img = img;
  this.cat = cat;
  this.titulo = titulo;
  this.modal = modal;
  this.imgmodal = imgmodal;
};
let img1 = new Obj("https://live.staticflickr.com/65535/53167985139_c485181821_b.jpg", "Process","Collecting Center","img1",'https://live.staticflickr.com/65535/53167985139_c485181821_b.jpg');
let img2 = new Obj('https://live.staticflickr.com/65535/53167985284_4e44fbc691_b.jpg','Process', 'Opening a dead knot', 'img2', 'https://live.staticflickr.com/65535/53167985284_4e44fbc691_b.jpg');
let img3 = new Obj('https://live.staticflickr.com/65535/53167985964_392245d8b2_b.jpg', 'Atopic Killer', 'Original Product', 'img3','https://live.staticflickr.com/65535/53167985964_392245d8b2_b.jpg');
let img4 = new Obj('https://live.staticflickr.com/65535/53167671504_d453a8dbaa_b.jpg', 'Process', 'Collecting Center', 'img4','https://live.staticflickr.com/65535/53167671504_d453a8dbaa_b.jpg');
let img5 = new Obj('https://live.staticflickr.com/65535/53167951698_a7beed6c4d_b.jpg','Finished Project','Bathroom','img5', 'https://live.staticflickr.com/65535/53204843916_1b2356b83d_b.jpg');
let img6 = new Obj('https://live.staticflickr.com/65535/53167240677_98ca26d1a8_b.jpg','Finished Project','Wall','img6','https://live.staticflickr.com/65535/53203962527_8c53b628ea_b.jpg');
let img7 = new Obj('https://live.staticflickr.com/65535/53168278545_82be2d918b_b.jpg','Finished Project','Wall','img7','https://live.staticflickr.com/65535/53167840711_d45f3f24f0_b.jpg');
let img8 = new Obj('https://live.staticflickr.com/65535/53167840041_7403106d1a_b.jpg','Finished Project','Wall','img8','https://live.staticflickr.com/65535/53168329483_a30a0f228b_b.jpg');
let img9 = new Obj('https://live.staticflickr.com/65535/53167840101_eb3045d14c_b.jpg','Finished Project','Wall and Ceiling','img9','https://live.staticflickr.com/65535/53168329573_667dbbe54c_b.jpg');
let img10 = new Obj('https://live.staticflickr.com/65535/53168833177_0fe319bf9b_b.jpg','Finished Project','Flooring','img10','https://live.staticflickr.com/65535/53169858040_70075bcb9c_b.jpg');
let img11 = new Obj('https://live.staticflickr.com/65535/53169620009_7fdea975f1_b.jpg', 'Finished Project', 'Flooring', 'img11','https://live.staticflickr.com/65535/53169417951_57c8be823d_b.jpg')
let img12 = new Obj('https://live.staticflickr.com/65535/53168834492_f09d9c0d56_b.jpg','Finished Project','Ceiling','img12','https://live.staticflickr.com/65535/53169621124_9773e4470d_b.jpg')
let img13 = new Obj('https://live.staticflickr.com/65535/53167603206_4245aaf9cb_b.jpg','Finished Project','Ceiling','img13','https://live.staticflickr.com/65535/53205226254_3865dea0a2_b.jpg')
let img14 = new Obj('https://live.staticflickr.com/65535/53168041705_15b59148bd_b.jpg', 'Finished Project','Ceiling and Wall','img14', 'https://live.staticflickr.com/65535/53170092133_2d885c3d1b_b.jpg')
let img15 = new Obj('https://live.staticflickr.com/65535/53170092528_bd7cf0aee4_b.jpg', 'Finished Project','Exterior Wall','img15', 'https://live.staticflickr.com/65535/53201829502_99a6088264_b.jpg')
let img16 = new Obj('https://live.staticflickr.com/65535/53169622636_0ff9f1c9d1_b.jpg', 'Finished Project','Wall','img16', 'https://live.staticflickr.com/65535/53205347055_963c20ef71_b.jpg')
let img17 = new Obj('https://live.staticflickr.com/65535/53170114133_7040c0bb54_b.jpg','Finished Project','Wall and Ceiling','img17','https://live.staticflickr.com/65535/53169827454_bcfceb22f9_b.jpg')
let img18 = new Obj('https://live.staticflickr.com/65535/53170065025_57a840c741_b.jpg','Finished Project','Room Flooring','img18','https://live.staticflickr.com/65535/53203130030_8256987303_b.jpg')
let img19 = new Obj('https://live.staticflickr.com/65535/53169061442_447361c7fb_b.jpg','Finished Project','Bathroom','img19','https://live.staticflickr.com/65535/53169062172_7f9d0e3cfa_b.jpg')
let img20 = new Obj('https://live.staticflickr.com/65535/53169846729_80f16a299f_b.jpg','Finished Project','Bathroom','img20','https://live.staticflickr.com/65535/53169645256_1533005fb3_b.jpg')
let img21 = new Obj('https://live.staticflickr.com/65535/53170135738_8863a18a61_b.jpg','Finished Project','Living Room','img21','https://live.staticflickr.com/65535/53169847439_5547974ee1_b.jpg')
let img22 = new Obj('https://live.staticflickr.com/65535/53170101430_3c186e88a3_b.jpg','Finished Project','Kitchen','img22','https://live.staticflickr.com/65535/53169075737_14d97838ce_b.jpg')
let img23 = new Obj('https://live.staticflickr.com/65535/53170102255_a39225a7d7_b.jpg','Finished Project','Laundry','img23','https://live.staticflickr.com/65535/53170098685_26467bdf97_b.jpg');
let img24 = new Obj('https://live.staticflickr.com/65535/53169863584_1aa482f81f_b.jpg','Finished Project','Room Flooring','img24','https://live.staticflickr.com/65535/53203020298_a124f611b1_b.jpg');
let img25 = new Obj('https://live.staticflickr.com/65535/53170305163_36f639cc9c_b.jpg','Finished Project','Wall and Flooring','img25','https://live.staticflickr.com/65535/53169230702_a18e32867c_b.jpg');
let img26 = new Obj('https://live.staticflickr.com/65535/53170255825_71a98a59df_b.jpg','Finished Project','Wall and Flooring','img26','https://live.staticflickr.com/65535/53170256310_cdc58b96fd_b.jpg');
let img27 = new Obj('https://live.staticflickr.com/65535/53169230347_fb2d313dea_b.jpg','Finished Project','Wall and Flooring','img27','https://live.staticflickr.com/65535/53170305643_d3536614be_b.jpg');
let img28 = new Obj('https://live.staticflickr.com/65535/53169861951_7f105db0e4_b.jpg','Finished Project','Exterior Wall','img28','https://live.staticflickr.com/65535/53201829402_43e00cba3a_b.jpg');
let img29 = new Obj('https://live.staticflickr.com/65535/53170063259_ea16bd5301_b.jpg','Finished Project','Room Flooring','img29','https://live.staticflickr.com/65535/53170309320_c8927d3b32_b.jpg');
let img30 = new Obj('https://live.staticflickr.com/65535/53170352578_e2962a22b7_b.jpg','Finished Project','Room Flooring','img30','https://live.staticflickr.com/65535/53170068499_abd0faf4cc_b.jpg');
let img31 = new Obj('https://live.staticflickr.com/65535/53170323985_77d407b5bc_b.jpg','Finished Project','Room Flooring','img31','https://live.staticflickr.com/65535/53169885871_ecdf20d3b3_b.jpg');
let img33 = new Obj('https://live.staticflickr.com/65535/53170082694_301c6a7e6e_b.jpg','Finished Project','Room Flooring','img33','https://live.staticflickr.com/65535/53170375143_cd7fe355b5_b.jpg');
let img34 = new Obj('https://live.staticflickr.com/65535/53170376803_e44e58eef3_b.jpg','Finished Project','Wall','img34','https://live.staticflickr.com/65535/53205226224_931ced0da0_b.jpg');
let img35 = new Obj('https://live.staticflickr.com/65535/53169999306_33d64d3911_b.jpg','Finished Project','Room Flooring and Wall','img35','https://live.staticflickr.com/65535/53170489488_e565661bf7_b.jpg');
let img36 = new Obj('https://live.staticflickr.com/65535/53169996571_3b3899b377_b.jpg','Finished Project','Wall','img36','https://live.staticflickr.com/65535/53170440570_43045e106d_b.jpg');
let img37 = new Obj('https://live.staticflickr.com/65535/53170512328_d66eedd831_b.jpg','Finished Project','Indoor Wall and Ceiling','img37','https://live.staticflickr.com/65535/53170230704_14e0310ac8_b.jpg');
let img38 = new Obj('https://live.staticflickr.com/65535/53169439357_fa192767a7_b.jpg','Finished Project','Indoor Wall and Ceiling','img38','https://live.staticflickr.com/65535/53170029966_ae7ef9f30b_b.jpg');
let img39 = new Obj('https://live.staticflickr.com/65535/53170223954_1c4fc55fd0_b.jpg','Finished Project','Exterior Wall','img39','https://live.staticflickr.com/65535/53170230734_78e1ebfbde_b.jpg');
let img40 = new Obj('https://live.staticflickr.com/65535/53170506080_bfe3fe3137_b.jpg','Finished Project','Motorhome','img40','https://live.staticflickr.com/65535/53203962457_d9a0e9b85b_b.jpg');
let img41 = new Obj('https://live.staticflickr.com/65535/53170266594_052efa49d3_b.jpg','Finished Project','Motorhome','img41','https://live.staticflickr.com/65535/53205146508_df00b768ae_b.jpg');
let img42 = new Obj('https://live.staticflickr.com/65535/53183971365_c0285e12c9_b.jpg','Finished Project','Ceiling and Wall','img42','https://live.staticflickr.com/65535/53204843746_73f4d55cf6_b.jpg');
let img43 = new Obj('https://live.staticflickr.com/65535/53183980485_fe60ecb86c_b.jpg','Finished Project','Exterior Wall','img43','https://live.staticflickr.com/65535/53205146458_fc274f7249_b.jpg');
let img44 = new Obj('https://live.staticflickr.com/65535/53183067997_1544963f64_b.jpg','Finished Project','Ceiling and Wall','img44','https://live.staticflickr.com/65535/53197147627_bbb400b43f_b.jpg');
let img45 = new Obj('https://live.staticflickr.com/65535/53183067557_175d834d1d_b.jpg','Finished Project','Exterior Wall','img45','https://live.staticflickr.com/65535/53205346985_0927d2dbd3_b.jpg');
let img46 = new Obj('https://live.staticflickr.com/65535/53183988170_0ec282a1ca_b.jpg','Finished Project','Ceiling and Wall','img46','https://live.staticflickr.com/65535/53197606326_3ea1b3210d_b.jpg');
let img47 = new Obj('https://live.staticflickr.com/65535/53183850489_cf873ac9df_b.jpg','Finished Project','Exterior Wall','img47','https://live.staticflickr.com/65535/53204844061_82c3d8666d_b.jpg');
let img48 = new Obj('https://live.staticflickr.com/65535/53186532028_d3d6912f91_b.jpg','Finished Project','Wall','img48','https://live.staticflickr.com/65535/53197606356_a413347172_b.jpg');
let img49 = new Obj('https://live.staticflickr.com/65535/53202626356_cf3c09dd23_b.jpg','Italian Restaurant Raul ','Wal','img49','https://live.staticflickr.com/65535/53202959735_aba6dbbb06_b.jpg');
let img50 = new Obj('https://live.staticflickr.com/65535/53203150655_d858ed15d3_b.jpg','Italian Restaurant Raul','Logo','img50','https://live.staticflickr.com/65535/53203150655_d858ed15d3_b.jpg');
let img51 = new Obj('https://live.staticflickr.com/65535/53203030944_13e094d4b0_b.jpg','Italian Restaurant Raul','The Restaurant','img51','https://live.staticflickr.com/65535/53203030944_13e094d4b0_b.jpg');
let img52 = new Obj('https://live.staticflickr.com/65535/53203120354_c94a2efed8_b.jpg','Italian Restaurant Raul ','Wall','img52','https://live.staticflickr.com/65535/53205226369_c974cb2fa3_b.jpg');
let img53 = new Obj('https://live.staticflickr.com/65535/53201760492_18d69fee6e_b.jpg','Italian Restaurant Raul','Pizza','img53','https://live.staticflickr.com/65535/53201760492_18d69fee6e_b.jpg');
let img54 = new Obj('https://live.staticflickr.com/65535/53203120339_520be20796_b.jpg','Italian Restaurant Raul','Ceiling','img54','https://live.staticflickr.com/65535/53205146738_5342b9c52d_b.jpg');
let img55 = new Obj('https://live.staticflickr.com/65535/53203059750_57a7c9b343_b.jpg','Italian Restaurant Raul','Menu','img55','https://live.staticflickr.com/65535/53203059750_57a7c9b343_b.jpg');
let img56 = new Obj('https://live.staticflickr.com/65535/53203030949_7328fcb5fd_b.jpg','Italian Restaurant Raul','Menu','img56','https://live.staticflickr.com/65535/53203030949_7328fcb5fd_b.jpg');
let img57 = new Obj('https://live.staticflickr.com/65535/53202726646_4308578dc1_b.jpg','Italian Restaurant Raul','Menu','img57','https://live.staticflickr.com/65535/53202726646_4308578dc1_b.jpg');
let objetos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,img12,img13,img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26,img27, img28,img29, img30, img31, img33,img34,img35,img36,img37,img38,img39,img40,img41,img42,img43,img44,img45,img46,img47,img48,img49,img50,img51,img52,img53,img54,img55,img56,img57];
let loop = objetos.forEach(elem =>{
let div = document.createElement("div")
div.innerHTML=`
<div class="col pb-5 px-5 p-sm-3 pb-sm-5">
  <div class="overflow-hidden" style="height: fit-content; width: fit-content">
    <img class="img" width="100%" src="${elem.img}" alt="" data-bs-toggle="modal" data-bs-target="#${elem.modal}">
  </div>
  <p class="txt-marrom ps-0 pb-0 p-3 mb-2">${elem.cat}</p>
  <h5 class="mt-0">${elem.titulo}</h5>
  <div class="modal fade" id="${elem.modal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
       <div class="modal-body">
         <img width="100%" src="${elem.imgmodal}">
       </div>
      </div>
      <button type="button" class="btn-close position-absolute end-0" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
  </div>
</div>

`
let novo = row.appendChild(div)
})
