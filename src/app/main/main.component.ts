import { Component, OnInit } from '@angular/core';
import {NgStyle } from "@angular/common";
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [NgStyle, CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

pieceId = 0;
currentPiece = 0;
visible = false;
currentSpaceId = 0;
DiceResult: number = 0;

changeCurrentPieceValue(){
this.currentPiece = 1
this.currentSpaceId = this.piecesOnBoard[1].pieceSpace
}

AddById(id: number){

const CurrentPiece = this.piecesOnBoard.find(f => f.id === id)

if(CurrentPiece){

this.currentSpaceId = (this.currentSpaceId + this.DiceResult) % 60

CurrentPiece.col = this.currentSpace.col
CurrentPiece.row = this.currentSpace.row
CurrentPiece.pieceSpace = this.currentSpaceId

}

}

DiceRoll(){
this.DiceResult = Math.floor(Math.random()* 6) + 1;
}

select(id:number){
const Storedpiece = this.pieces.find(f => f.id === id);

this.currentPiece++

if(Storedpiece){
  Storedpiece.selected = true
  Storedpiece.available = false
  this.visible = true;
  this.piecesOnBoard.push({ id: this.currentPiece, row: this.currentSpace.row, col: this.currentSpace.col, pieceSpace:this.currentSpace.id });
  this.position.push({ id: this.currentPiece, row: 0, col: 0})
}

}

pieces = [
  {id: 1, available: true, selected: false},
  {id: 2, available: true, selected: false},
  {id: 3, available: true, selected: false},
  {id: 4, available: true, selected: false},
]



get currentPieceID(){
    return this.piecesOnBoard.find(space => space.id === this.currentSpaceId) || {id:0, row:0, col:0};
}

get currentSpace(){
    return this.spaces.find(space => space.id === this.currentSpaceId) || {id:0, row:0, col:0};
}



piecesOnBoard: {id: number, row: any, col: any, pieceSpace: any}[] = []

position: {id: number, row: any, col: any}[] = []


spaces: {id: number, row: number, col: number}[] = []

  ngOnInit(): void {
  this.createSpaces();
}  

  createSpaces(){
   
  this.spaces.push({ id: 0, row: 15, col: 6 });
  this.spaces.push({ id: 1, row: 14, col: 6 });
  this.spaces.push({ id: 2, row: 13, col: 6 });
  this.spaces.push({ id: 3, row: 12, col: 6 });
  this.spaces.push({ id: 4, row: 11, col: 6 });
  this.spaces.push({ id: 5, row: 10, col: 6 });
  this.spaces.push({ id: 6, row: 10, col: 5 });
  this.spaces.push({ id: 7, row: 9, col: 5 });
  this.spaces.push({ id: 8, row: 9, col: 4 });
  this.spaces.push({ id: 9, row: 9, col: 3 });
  this.spaces.push({ id: 10, row: 9, col: 2 });
  this.spaces.push({ id: 11, row: 9, col: 1 });
  this.spaces.push({ id: 12, row: 9, col: 0 });
  this.spaces.push({ id: 13, row: 8, col: 0 });
  this.spaces.push({ id: 14, row: 7, col: 0 });
  this.spaces.push({ id: 15, row: 7, col: 1 });
  this.spaces.push({ id: 16, row: 7, col: 2 });
  this.spaces.push({ id: 17, row: 7, col: 3 });
  this.spaces.push({ id: 18, row: 7, col: 4 });
  this.spaces.push({ id: 19, row: 7, col: 5 });
  this.spaces.push({ id: 20, row: 6, col: 5 });
  this.spaces.push({ id: 21, row: 6, col: 6 });
  this.spaces.push({ id: 22, row: 5, col: 6 });
  this.spaces.push({ id: 23, row: 4, col: 6 });
  this.spaces.push({ id: 24, row: 3, col: 6 });
  this.spaces.push({ id: 25, row: 2, col: 6 });
  this.spaces.push({ id: 26, row: 1, col: 6 });
  this.spaces.push({ id: 27, row: 0, col: 6 });
  this.spaces.push({ id: 28, row: 0, col: 7 });
  this.spaces.push({ id: 29, row: 0, col: 8 });
  this.spaces.push({ id: 30, row: 1, col: 8 });
  this.spaces.push({ id: 31, row: 2, col: 8 });
  this.spaces.push({ id: 32, row: 3, col: 8 });
  this.spaces.push({ id: 33, row: 4, col: 8 });
  this.spaces.push({ id: 34, row: 5, col: 8 });
  this.spaces.push({ id: 35, row: 6, col: 8 });
  this.spaces.push({ id: 36, row: 6, col: 9 });
  this.spaces.push({ id: 37, row: 7, col: 9 });
  this.spaces.push({ id: 38, row: 7, col: 10 });
  this.spaces.push({ id: 39, row: 7, col: 11 });
  this.spaces.push({ id: 40, row: 7, col: 12 });
  this.spaces.push({ id: 41, row: 7, col: 13 });
  this.spaces.push({ id: 42, row: 7, col: 14 });
  this.spaces.push({ id: 43, row: 7, col: 15 });  
  this.spaces.push({ id: 44, row: 8, col: 15 });
  this.spaces.push({ id: 45, row: 9, col: 15 });
  this.spaces.push({ id: 46, row: 9, col: 14 });
  this.spaces.push({ id: 47, row: 9, col: 13 });
  this.spaces.push({ id: 48, row: 9, col: 12 });
  this.spaces.push({ id: 49, row: 9, col: 11 });
  this.spaces.push({ id: 50, row: 9, col: 10 });
  this.spaces.push({ id: 51, row: 9, col: 9 });
  this.spaces.push({ id: 52, row: 10, col: 9 });
  this.spaces.push({ id: 53, row: 10, col: 8 });
  this.spaces.push({ id: 54, row: 11, col: 8 });
  this.spaces.push({ id: 55, row: 12, col: 8 });
  this.spaces.push({ id: 56, row: 13, col: 8 }); 
  this.spaces.push({ id: 57, row: 14, col: 8 });
  this.spaces.push({ id: 58, row: 15, col: 8 });
  this.spaces.push({ id: 59, row: 15, col: 7 }); 

  }



}
