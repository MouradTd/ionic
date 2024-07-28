import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services';
import { TitleService } from 'src/app/utils';

@Component({
  selector: 'app-profile-classe',
  templateUrl: './profile-classe.page.html',
  styleUrls: ['./profile-classe.page.scss'],
})
export class ProfileClassePage implements OnInit {

  classe: any;
  

  constructor(private titleService: TitleService,
    private adminService: AdminService,
    private route: ActivatedRoute,) {}
  async ngOnInit() {
    const classeId = this.route.snapshot.paramMap.get('classeId');
    this.titleService.changeTitle('Profile Classe');
    await this.adminService.getClasseById(classeId).then((response) => {
      // console.log(response.data.classe);
      this.classe = response.data.classe;
    });
  }

}
