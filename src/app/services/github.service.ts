import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commit } from '../models/commit';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private root_endpoint:string="https://api.github.com";
  private facebook_endpoint:string = `${this.root_endpoint}/repos/facebook/react`
  constructor(private httpClient:HttpClient) { }


  getCommits(){
    return this.httpClient.get<Commit[]>( `${this.facebook_endpoint}/commits`);
  }

  getUser(name:String){
    // https://api.github.com/users/acdlite
    return this.httpClient.get<User>( `${this.root_endpoint}/users/${name}`);
  }

  getCommitDetails(id:String){
    return this.httpClient.get<Commit>(`${this.facebook_endpoint}/commits/${id}`);
  }
}
