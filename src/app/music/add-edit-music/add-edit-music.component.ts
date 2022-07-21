import { Component, OnInit } from '@angular/core';
//import { MusicApiService } from 'src/app/music-api.service';
import { MusicApiService } from '../../music-api.service'
import{Track} from '../../track.model'
@Component({
  selector: 'app-add-edit-music',
  templateUrl: './add-edit-music.component.html',
  styleUrls: ['./add-edit-music.component.css']
})
export class AddEditMusicComponent implements OnInit {

track = new Track();
  constructor(private service: MusicApiService ) { }

  ngOnInit(): void {
  }

  addNewMusic(){
 this.service.postMusic(this.track).subscribe(res =>{
   this.service.notifyChange();
//close the modal
const addMusicModalCloseBtn = document.getElementById("addMusicClose");


      if(addMusicModalCloseBtn) {
        addMusicModalCloseBtn.click();
}
//populate a success method
const successAlert = document.getElementById("post-success-alert");
if(successAlert){
successAlert.style.display = "block";

setTimeout(function() {
  successAlert.style.display = "none";

}, 4000);

}

 });
    

 }



    }
  
  


