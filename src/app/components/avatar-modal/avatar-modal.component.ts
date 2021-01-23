import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { User } from 'src/app/models/user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-avatar-modal',
  templateUrl: './avatar-modal.component.html',
  styleUrls: ['./avatar-modal.component.sass']
})
export class AvatarModalComponent implements OnInit {
  @Input() user:User;
  constructor(private githubService:GithubService,
    private modal: NzModalRef) { }

  ngOnInit(): void {
  }
 
  destroyModal(): void {
    this.modal.destroy();
  }

}
