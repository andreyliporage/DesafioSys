import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { PesquisaComponent } from "./header/components/pesquisa/pesquisa.component";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    declarations: [
        HeaderComponent,
        PesquisaComponent
    ],
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class SharedModule{}