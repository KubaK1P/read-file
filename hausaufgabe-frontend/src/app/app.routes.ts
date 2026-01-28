import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { ReadFile } from './read-file/read-file';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: "", component: MainPage },
  { path: "read-file", component: ReadFile },
  { path: "404", component: NotFound },
  { path: "**", redirectTo: "404" }
];
