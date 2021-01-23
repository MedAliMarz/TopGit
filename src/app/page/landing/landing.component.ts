import { Component, OnInit } from '@angular/core';
import { Commit } from '../../models/commit';
import { GithubService } from '../../services/github.service';
import { NzModalFooterComponent, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import {AvatarModalComponent} from '../../components/avatar-modal/avatar-modal.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {

  commits:Commit[];
  constructor(private githubService:GithubService,
    private modalService:NzModalService,
    private router:Router){}

  ngOnInit(){
    this.loadCommits();
  }

  loadModal(user_name:string){
    this.githubService.getUser(user_name).toPromise().then(
      user => {
        this.modalService.create({
          nzContent: AvatarModalComponent,
          nzFooter:null,
          nzComponentParams:{
            user:user
          }
        });
      }
    )   
  }
  loadCommits(){
    this.githubService.getCommits()
    .subscribe(commits => {
      this.commits = commits;
    },err => console.log(err))
  }

  getDetailsPage(id:string){
    this.router.navigate(['commit',id]);
  }

}
