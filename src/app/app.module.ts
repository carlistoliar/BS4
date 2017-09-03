import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicTypographyComponent } from './sandbox/basic-typography.component';
import { TextAlignmentDisplayComponent } from './sandbox/text-alignment-display.component';
import { FloatPositionsComponent } from './sandbox/float-positions.component';
import { ColorsBackgroundComponent } from './sandbox/colors-background.component';
import { SpacingComponent } from './sandbox/spacing.component';
import { SizingComponent } from './sandbox/sizing.component';
import { BreakpointsComponent } from './sandbox/breakpoints.component';
import { ButtonsComponent } from './sandbox/buttons.component';
import { NavbarComponent } from './sandbox/navbar.component';
import { ListGroupsBadgesComponent } from './sandbox/list-groups-badges.component';
import { FormsComponent } from './sandbox/forms.component';
import { ImputGroupsComponent } from './sandbox/imput-groups.component';
import { AlertsProgressComponent } from './sandbox/alerts-progress.component';
import { TablesPaginationComponent } from './sandbox/tables-pagination.component';
import { CardsComponent } from './sandbox/cards.component';
import { MediaObjectComponent } from './sandbox/media-object.component';
import { GridSystemComponent } from './sandbox/grid-system.component';
import { GridAlignmentComponent } from './sandbox/grid-alignment.component';
import { FlexboxComponent } from './sandbox/flexbox.component';
import { AutoMarginsWrappingOrderComponent } from './sandbox/auto-margins-wrapping-order.component';
import { CarouselComponent } from './sandbox/carousel.component';
import { CollapseComponent } from './sandbox/collapse.component';
import { TooltipsComponent } from './sandbox/tooltips.component';
import { PopoversComponent } from './sandbox/popovers.component';
import { ModalsComponent } from './sandbox/modals.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    BasicTypographyComponent,
    TextAlignmentDisplayComponent,
    FloatPositionsComponent,
    ColorsBackgroundComponent,
    SpacingComponent,
    SizingComponent,
    BreakpointsComponent,
    ButtonsComponent,
    NavbarComponent,
    ListGroupsBadgesComponent,
    FormsComponent,
    ImputGroupsComponent,
    AlertsProgressComponent,
    TablesPaginationComponent,
    CardsComponent,
    MediaObjectComponent,
    GridSystemComponent,
    GridAlignmentComponent,
    FlexboxComponent,
    AutoMarginsWrappingOrderComponent,
    CarouselComponent,
    CollapseComponent,
    TooltipsComponent,
    PopoversComponent,
    ModalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule/*NgbModule.forRoot()*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
