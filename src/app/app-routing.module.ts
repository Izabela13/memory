import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from "./features/categories/categories.component";
import {FlashCardsComponent} from "./features/flash-cards/flash-cards.component";
import {GamesComponent} from "./features/games/games.component";

const routes: Routes = [
  // Jeżeli wejdziemy na pustą ścieżkę, to przeniesie nas od razu do kategorii
  {path: "", pathMatch: "full", redirectTo: "categories"},
  // Poniższy wpis wie, co ma wyświetlić
  {path: "categories", component: CategoriesComponent},
  // po "category-id" będziemy wyciągali wartość
  {path: "categories/:category-id/flash-cards", component:FlashCardsComponent},
  {path: "categories/:category-id/games", component:GamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
