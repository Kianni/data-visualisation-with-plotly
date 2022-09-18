import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import * as PlotlyJS from "plotly.js-dist-min";
import { PlotlyModule } from "angular-plotly.js";

PlotlyModule.plotlyjs = PlotlyJS;

import { AppComponent } from "./app.component";
import { PlotlyExampleComponent } from "./plotly-example.component";

@NgModule({
  declarations: [AppComponent, PlotlyExampleComponent],
  imports: [BrowserModule, PlotlyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
