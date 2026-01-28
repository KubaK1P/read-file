import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FileText } from '../file-text';

@Component({
  selector: 'app-read-file',
  imports: [],
  templateUrl: './read-file.html',
  styleUrl: './read-file.css',
})
export class ReadFile {
  private http = inject(HttpClient);
  private path = "http://localhost:5185/file";
  public fileText: FileText = { text: "Unable to read the file bruh" };
  constructor() {
    this.http.get<FileText>(this.path).subscribe((res) => {
      console.log(res);
      this.fileText = res;
    })
  }
}
