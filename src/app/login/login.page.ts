import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo: string = "";
  contrasena: string = "";


  item: any={
    imagen: "assets/icon/favicon.png"
  }

  user1: string="he1@gmail.com";
  contrasena1: string ="123456";

  constructor(public toastController: ToastController,private router: Router) {}

  PasarDatos(){
    if(this.correo == this.user1 && this.contrasena == this.contrasena1){
      let navigationExtras: NavigationExtras = {
        state:{
          correito: this.correo,
          password: this.contrasena
        }
      };
      this.router.navigate(['/home'], navigationExtras);
    }
    else{this.presentToast("Datos incorrectos");
    }
  }

  async presentToast(msj:string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }


  ngOnInit() {
  }

}
