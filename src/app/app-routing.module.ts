import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { ModalsComponent} from './sandbox/modals.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'basic_typography' },
  { path: 'basic_typography', component: BasicTypographyComponent},
  { path: 'text_alignment_display', component: TextAlignmentDisplayComponent},
  { path: 'floats_position', component: FloatPositionsComponent},
  { path: 'colors_background', component: ColorsBackgroundComponent},
  { path: 'spacing', component: SpacingComponent},
  { path: 'sizing', component: SizingComponent},
  { path: 'breakpoints', component: BreakpointsComponent},
  { path: 'buttons', component: ButtonsComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'list_groups_badges', component: ListGroupsBadgesComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'input_groups', component: ImputGroupsComponent},
  { path: 'alerts_progress', component:AlertsProgressComponent},
  { path: 'tables_pagination', component: TablesPaginationComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'media_objects', component: MediaObjectComponent},
  { path: 'grid_system', component: GridSystemComponent},
  { path: 'grid_alignment', component: GridAlignmentComponent},
  { path: 'flexbox', component: FlexboxComponent},
  { path: 'auto_margins_wrapping_order', component: AutoMarginsWrappingOrderComponent},
  { path: 'carousel', component: CarouselComponent},
  { path: 'collapse', component: CollapseComponent},
  { path: 'tooltips', component: TooltipsComponent},
  { path: 'popovers', component: PopoversComponent},
  { path: 'modals', component: ModalsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
