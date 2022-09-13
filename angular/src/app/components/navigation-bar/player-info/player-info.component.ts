import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserInformationService } from '../../../services/user-information.service';

@Component({
  selector: 'shpp-player-info',
  templateUrl: './player-info.component.html',
  styles: [
  ]
})
export class PlayerInfoComponent {

  formControl: FormControl;
  editMode = false;

  constructor(private fb: FormBuilder,
              public userInformation: UserInformationService) {
    this.formControl = this.fb.control(this.userInformation.getName(),
      { validators: [Validators.required, Validators.minLength(1)] });
  }

  toggleSpectator(): void {
    this.userInformation.setSpectator(!this.userInformation.isSpectator());
  }

  getActionKey(): string {
    return this.userInformation.isSpectator()
      ? 'navbar.playerInfo.actions.setPlayer'
      : 'navbar.playerInfo.actions.setSpectator';
  }

  validateNameChange(): void {
    const newName = this.formControl.value;
    this.userInformation.setName(newName);
    this.editMode = false;
  }

}