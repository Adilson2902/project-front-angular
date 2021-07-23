import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({providedIn:'root'})
export class CadastroService{

 baseurl = "http://localhost:8080"

          constructor(private httpClient:HttpClient){

          }



          cadastrar(name:string,email:string,phone:string):Observable<any>{
          return  this.httpClient.post(this.baseurl,{
                  name,
                  email,
                  phone
                })
          }


}
