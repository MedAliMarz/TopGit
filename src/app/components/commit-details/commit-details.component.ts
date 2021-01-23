import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Commit } from 'src/app/models/commit';
import { GithubService } from 'src/app/services/github.service';
import { AvatarModalComponent } from '../avatar-modal/avatar-modal.component';

@Component({
  selector: 'app-commit-details',
  templateUrl: './commit-details.component.html',
  styleUrls: ['./commit-details.component.sass']
})
export class CommitDetailsComponent implements OnInit {
  commit:Commit
  id:string;
  constructor(private route:ActivatedRoute,
    private githubService:GithubService,
    private modalService:NzModalService,
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      map=> {
        this.id = map.get('id');
        this.loadCommit();
      },
      err => console.log(err)
      
    )
    
    
  }
  loadModal(user_name){
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
  loadCommit(){
    this.githubService.getCommitDetails(this.id).subscribe(
      commit => {
        this.commit=commit;
      },
      err => console.log(err)
      
    )
  }
}
