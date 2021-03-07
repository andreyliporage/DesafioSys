import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { PesquisaComponent } from "./header/components/pesquisa/pesquisa.component";
import { TabelaComponent } from "../tabela/tabela.component";
import { FiltroComponent } from "./header/components/filtro/filtro.component";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        HeaderComponent,
        PesquisaComponent,
        TabelaComponent,
        FiltroComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class SharedModule{}