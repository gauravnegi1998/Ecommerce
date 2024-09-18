import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-CJL36PQZ.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase
} from "./chunk-LF6B44VS.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  Input,
  IterableDiffers,
  NgModule,
  Output,
  Pipe,
  forwardRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5TSHO6Z6.js";
import "./chunk-SG3BCSKH.js";
import "./chunk-SAVXX6OM.js";
import {
  Subject,
  takeUntil
} from "./chunk-PQ7O3X3G.js";
import {
  __spreadValues
} from "./chunk-X6JV76XL.js";

// node_modules/ngx-bootstrap-multiselect/fesm2020/ngx-bootstrap-multiselect.mjs
function NgxDropdownMultiselectComponent_div_0_div_4_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19)(1, "button", 20);
    ɵɵlistener("click", function NgxDropdownMultiselectComponent_div_0_div_4_div_2_div_5_Template_button_click_1_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r11 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r11.clearSearch($event));
    });
    ɵɵelement(2, "i", 21);
    ɵɵelementEnd()();
  }
}
function NgxDropdownMultiselectComponent_div_0_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13)(1, "div", 14)(2, "span", 15);
    ɵɵelement(3, "i", 16);
    ɵɵelementEnd()();
    ɵɵelement(4, "input", 17);
    ɵɵtemplate(5, NgxDropdownMultiselectComponent_div_0_div_4_div_2_div_5_Template, 3, 0, "div", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵadvance(4);
    ɵɵproperty("formControl", ctx_r3.filterControl)("placeholder", ctx_r3.texts.searchPlaceholder);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.filterControl.value.length > 0);
  }
}
var _c0 = (a0, a1) => ({
  "glyphicon glyphicon-ok": a0,
  "fa fa-check": a1
});
function NgxDropdownMultiselectComponent_div_0_div_4_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 22);
    ɵɵlistener("click", function NgxDropdownMultiselectComponent_div_0_div_4_a_3_Template_a_click_0_listener() {
      ɵɵrestoreView(_r14);
      const ctx_r13 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r13.checkAll());
    });
    ɵɵelementStart(1, "span", 23);
    ɵɵelement(2, "span", 24);
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c0, ctx_r4.settings.checkedStyle !== "fontawesome", ctx_r4.settings.checkedStyle === "fontawesome"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r4.texts.checkAll, " ");
  }
}
var _c1 = (a0, a1) => ({
  "glyphicon glyphicon-remove": a0,
  "fa fa-times": a1
});
function NgxDropdownMultiselectComponent_div_0_div_4_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 25);
    ɵɵlistener("click", function NgxDropdownMultiselectComponent_div_0_div_4_a_4_Template_a_click_0_listener() {
      ɵɵrestoreView(_r16);
      const ctx_r15 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r15.uncheckAll());
    });
    ɵɵelementStart(1, "span", 23);
    ɵɵelement(2, "span", 24);
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c1, ctx_r5.settings.checkedStyle !== "fontawesome", ctx_r5.settings.checkedStyle === "fontawesome"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r5.texts.uncheckAll, " ");
  }
}
function NgxDropdownMultiselectComponent_div_0_div_4_a_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "a", 26);
  }
}
function NgxDropdownMultiselectComponent_div_0_div_4_a_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 27);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r7.texts.searchNoRenderText);
  }
}
function NgxDropdownMultiselectComponent_div_0_div_4_a_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 27);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r8.texts.searchEmptyResult);
  }
}
function NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 37);
    ɵɵlistener("click", function NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_input_2_Template_input_click_0_listener($event) {
      ɵɵrestoreView(_r27);
      const option_r17 = ɵɵnextContext(2).$implicit;
      const ctx_r25 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r25.preventCheckboxCheck($event, option_r17));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r17 = ɵɵnextContext(2).$implicit;
    const ctx_r21 = ɵɵnextContext(3);
    ɵɵproperty("checked", ctx_r21.isSelected(option_r17))("disabled", ctx_r21.isCheckboxDisabled(option_r17))("ngStyle", ctx_r21.getItemStyleSelectionDisabled());
  }
}
function NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 38);
  }
  if (rf & 2) {
    const option_r17 = ɵɵnextContext(2).$implicit;
    const ctx_r22 = ɵɵnextContext(3);
    ɵɵclassProp("glyphicon-ok", ctx_r22.isSelected(option_r17))("glyphicon-lock", ctx_r22.isCheckboxDisabled(option_r17));
  }
}
function NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_span_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelement(1, "i", 41);
    ɵɵelementEnd();
  }
}
function NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_span_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelement(1, "i", 42);
    ɵɵelementEnd();
  }
}
function NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 39);
    ɵɵtemplate(1, NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_span_4_span_1_Template, 2, 0, "span", 40)(2, NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_span_4_span_2_Template, 2, 0, "span", 40);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r17 = ɵɵnextContext(2).$implicit;
    const ctx_r23 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r23.isSelected(option_r17));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r23.isCheckboxDisabled(option_r17));
  }
}
function NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_span_5_img_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 47);
  }
  if (rf & 2) {
    const option_r17 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("src", option_r17.image, ɵɵsanitizeUrl);
  }
}
function NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_span_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 48)(1, "div", 49);
    ɵɵelement(2, "span", 50);
    ɵɵelementEnd()();
  }
}
var _c2 = (a0) => ({
  "slideron": a0
});
function NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 43)(1, "div", 44);
    ɵɵtemplate(2, NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_span_5_img_2_Template, 1, 1, "img", 45)(3, NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_span_5_div_3_Template, 3, 0, "div", 46);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const option_r17 = ɵɵnextContext(2).$implicit;
    const ctx_r24 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c2, ctx_r24.isSelected(option_r17)));
    ɵɵadvance();
    ɵɵproperty("ngIf", option_r17.image != null);
    ɵɵadvance();
    ɵɵproperty("ngIf", option_r17.image == null);
  }
}
var _c3 = (a0) => ({
  "chunkyrow": a0
});
function NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 31);
    ɵɵelementContainerStart(1, 32);
    ɵɵtemplate(2, NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_input_2_Template, 1, 3, "input", 33)(3, NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_span_3_Template, 1, 4, "span", 34)(4, NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_span_4_Template, 3, 2, "span", 35)(5, NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_span_5_Template, 4, 5, "span", 36);
    ɵɵelementContainerEnd();
    ɵɵelementStart(6, "span", 24);
    ɵɵtext(7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const option_r17 = ɵɵnextContext().$implicit;
    const ctx_r18 = ɵɵnextContext(3);
    ɵɵstyleProp("padding-left", ctx_r18.parents.length > 0 && ctx_r18.parents.indexOf(option_r17.id) < 0 && "30px");
    ɵɵproperty("ngStyle", ctx_r18.getItemStyleSelectionDisabled());
    ɵɵadvance();
    ɵɵproperty("ngSwitch", ctx_r18.settings.checkedStyle);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "checkboxes");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "glyphicon");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "fontawesome");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "visual");
    ɵɵadvance();
    ɵɵstyleProp("font-weight", ctx_r18.parents.indexOf(option_r17.id) >= 0 ? "bold" : "normal");
    ɵɵclassProp("disabled", ctx_r18.isCheckboxDisabled(option_r17));
    ɵɵproperty("ngClass", ɵɵpureFunction1(15, _c3, ctx_r18.settings.checkedStyle == "visual"))("ngClass", ctx_r18.settings.itemClasses);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", option_r17.name, " ");
  }
}
function NgxDropdownMultiselectComponent_div_0_div_4_a_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r17 = ɵɵnextContext().$implicit;
    const ctx_r19 = ɵɵnextContext(3);
    ɵɵclassProp("disabled", ctx_r19.isCheckboxDisabled(option_r17));
    ɵɵadvance();
    ɵɵtextInterpolate(option_r17.name);
  }
}
function NgxDropdownMultiselectComponent_div_0_div_4_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 28);
    ɵɵlistener("click", function NgxDropdownMultiselectComponent_div_0_div_4_a_8_Template_a_click_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r40);
      const option_r17 = restoredCtx.$implicit;
      const ctx_r39 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r39.setSelected($event, option_r17));
    })("keydown.space", function NgxDropdownMultiselectComponent_div_0_div_4_a_8_Template_a_keydown_space_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r40);
      const option_r17 = restoredCtx.$implicit;
      const ctx_r41 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r41.setSelected($event, option_r17));
    })("keydown.enter", function NgxDropdownMultiselectComponent_div_0_div_4_a_8_Template_a_keydown_enter_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r40);
      const option_r17 = restoredCtx.$implicit;
      const ctx_r42 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r42.setSelected($event, option_r17));
    });
    ɵɵtemplate(1, NgxDropdownMultiselectComponent_div_0_div_4_a_8_span_1_Template, 8, 17, "span", 29)(2, NgxDropdownMultiselectComponent_div_0_div_4_a_8_ng_template_2_Template, 2, 3, "ng-template", null, 30, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    const _r20 = ɵɵreference(3);
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵclassProp("active", ctx_r9.isSelected(option_r17))("dropdown-header", option_r17.isLabel);
    ɵɵproperty("ngStyle", ctx_r9.getItemStyle(option_r17))("ngClass", option_r17.classes)("ssAutofocus", option_r17 !== ctx_r9.focusedItem);
    ɵɵadvance();
    ɵɵproperty("ngIf", !option_r17.isLabel)("ngIfElse", _r20);
  }
}
var _c4 = (a0) => ({
  "chunkydropdown-menu": a0
});
function NgxDropdownMultiselectComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5, 6);
    ɵɵlistener("scroll", function NgxDropdownMultiselectComponent_div_0_div_4_Template_div_scroll_0_listener($event) {
      ɵɵrestoreView(_r44);
      const ctx_r43 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r43.settings.isLazyLoad ? ctx_r43.checkScrollPosition($event) : null);
    })("wheel", function NgxDropdownMultiselectComponent_div_0_div_4_Template_div_wheel_0_listener($event) {
      ɵɵrestoreView(_r44);
      const _r2 = ɵɵreference(1);
      const ctx_r45 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r45.settings.stopScrollPropagation ? ctx_r45.checkScrollPropagation($event, _r2) : null);
    })("keydown.tab", function NgxDropdownMultiselectComponent_div_0_div_4_Template_div_keydown_tab_0_listener($event) {
      ɵɵrestoreView(_r44);
      const ctx_r46 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r46.focusItem(1, $event));
    })("keydown.shift.tab", function NgxDropdownMultiselectComponent_div_0_div_4_Template_div_keydown_shift_tab_0_listener($event) {
      ɵɵrestoreView(_r44);
      const ctx_r47 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r47.focusItem(-1, $event));
    });
    ɵɵtemplate(2, NgxDropdownMultiselectComponent_div_0_div_4_div_2_Template, 6, 3, "div", 7)(3, NgxDropdownMultiselectComponent_div_0_div_4_a_3_Template, 4, 5, "a", 8)(4, NgxDropdownMultiselectComponent_div_0_div_4_a_4_Template, 4, 5, "a", 9)(5, NgxDropdownMultiselectComponent_div_0_div_4_a_5_Template, 1, 0, "a", 10)(6, NgxDropdownMultiselectComponent_div_0_div_4_a_6_Template, 2, 1, "a", 11)(7, NgxDropdownMultiselectComponent_div_0_div_4_a_7_Template, 2, 1, "a", 11)(8, NgxDropdownMultiselectComponent_div_0_div_4_a_8_Template, 4, 9, "a", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵstyleProp("max-height", ctx_r1.settings.maxHeight);
    ɵɵclassProp("pull-right", ctx_r1.settings.pullRight)("dropdown-menu-right", ctx_r1.settings.pullRight);
    ɵɵproperty("ngClass", ɵɵpureFunction1(15, _c4, ctx_r1.settings.checkedStyle == "visual"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.settings.enableSearch && (ctx_r1.renderFilteredOptions.length > 1 || ctx_r1.filterControl.value.length > 0));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.settings.showCheckAll && !ctx_r1.disabledSelection && ctx_r1.renderFilteredOptions.length > 1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.settings.showUncheckAll && !ctx_r1.disabledSelection && ctx_r1.renderFilteredOptions.length > 1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.settings.showCheckAll || ctx_r1.settings.showUncheckAll);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.renderItems);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.renderItems && !ctx_r1.renderFilteredOptions.length);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.renderFilteredOptions)("ngForTrackBy", ctx_r1.trackById);
  }
}
function NgxDropdownMultiselectComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("offClick", function NgxDropdownMultiselectComponent_div_0_Template_div_offClick_0_listener() {
      ɵɵrestoreView(_r49);
      const ctx_r48 = ɵɵnextContext();
      return ɵɵresetView(ctx_r48.clickedOutside());
    });
    ɵɵelementStart(1, "button", 2);
    ɵɵlistener("click", function NgxDropdownMultiselectComponent_div_0_Template_button_click_1_listener($event) {
      ɵɵrestoreView(_r49);
      const ctx_r50 = ɵɵnextContext();
      return ɵɵresetView(ctx_r50.toggleDropdown($event));
    });
    ɵɵtext(2);
    ɵɵelement(3, "span", 3);
    ɵɵelementEnd();
    ɵɵtemplate(4, NgxDropdownMultiselectComponent_div_0_div_4_Template, 9, 17, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("open", ctx_r0.isVisible);
    ɵɵproperty("ngClass", ctx_r0.settings.containerClasses);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.settings.buttonClasses)("disabled", ctx_r0.disabled)("ssAutofocus", !ctx_r0.focusBack);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.title, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.isVisible);
  }
}
var MultiSelectSearchFilter = class {
  constructor() {
    this._searchCache = {};
    this._searchCacheInclusive = {};
    this._prevSkippedItems = {};
  }
  transform(options, str = "", limit = 0, renderLimit = 0, searchFunction) {
    str = str.toLowerCase();
    if (options !== this._lastOptions) {
      this._lastOptions = options;
      this._searchCache = {};
      this._searchCacheInclusive = {};
      this._prevSkippedItems = {};
    }
    const filteredOpts = this._searchCache.hasOwnProperty(str) ? this._searchCache[str] : this._doSearch(options, str, limit, searchFunction);
    const isUnderLimit = options.length <= limit;
    return isUnderLimit ? filteredOpts : this._limitRenderedItems(filteredOpts, renderLimit);
  }
  _getSubsetOptions(options, prevOptions, prevSearchStr) {
    const prevInclusiveOrIdx = this._searchCacheInclusive[prevSearchStr];
    if (prevInclusiveOrIdx === true) {
      return prevOptions;
    } else if (typeof prevInclusiveOrIdx === "number") {
      return [...prevOptions, ...options.slice(prevInclusiveOrIdx)];
    }
    return options;
  }
  _doSearch(options, str, limit, searchFunction) {
    const prevStr = str.slice(0, -1);
    const prevResults = this._searchCache[prevStr];
    const prevResultShift = this._prevSkippedItems[prevStr] || 0;
    if (prevResults) {
      options = this._getSubsetOptions(options, prevResults, prevStr);
    }
    const optsLength = options.length;
    const maxFound = limit > 0 ? Math.min(limit, optsLength) : optsLength;
    const regexp = searchFunction(str);
    const filteredOpts = [];
    let i = 0, founded = 0, removedFromPrevResult = 0;
    const doesOptionMatch = (option) => regexp.test(option.name);
    const getChildren = (option) => options.filter((child) => child.parentId === option.id);
    const getParent = (option) => options.find((parent) => option.parentId === parent.id);
    const foundFn = (item) => {
      filteredOpts.push(item);
      founded++;
    };
    const notFoundFn = prevResults ? () => removedFromPrevResult++ : () => {
    };
    for (; i < optsLength && founded < maxFound; ++i) {
      const option = options[i];
      const directMatch = doesOptionMatch(option);
      if (directMatch) {
        foundFn(option);
        continue;
      }
      if (typeof option.parentId === "undefined") {
        const childrenMatch = getChildren(option).some(doesOptionMatch);
        if (childrenMatch) {
          foundFn(option);
          continue;
        }
      }
      if (typeof option.parentId !== "undefined") {
        const parentMatch = doesOptionMatch(getParent(option));
        if (parentMatch) {
          foundFn(option);
          continue;
        }
      }
      notFoundFn();
    }
    const totalIterations = i + prevResultShift;
    this._searchCache[str] = filteredOpts;
    this._searchCacheInclusive[str] = i === optsLength || totalIterations;
    this._prevSkippedItems[str] = removedFromPrevResult + prevResultShift;
    return filteredOpts;
  }
  _limitRenderedItems(items, limit) {
    return items.length > limit && limit > 0 ? items.slice(0, limit) : items;
  }
};
MultiSelectSearchFilter.ɵfac = function MultiSelectSearchFilter_Factory(t) {
  return new (t || MultiSelectSearchFilter)();
};
MultiSelectSearchFilter.ɵpipe = ɵɵdefinePipe({
  name: "searchFilter",
  type: MultiSelectSearchFilter,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectSearchFilter, [{
    type: Pipe,
    args: [{
      name: "searchFilter"
    }]
  }], null, null);
})();
var AutofocusDirective = class {
  get element() {
    return this.elemRef.nativeElement;
  }
  constructor(elemRef) {
    this.elemRef = elemRef;
  }
  ngOnInit() {
    this.focus();
  }
  ngOnChanges(changes) {
    const ssAutofocusChange = changes.ssAutofocus;
    if (ssAutofocusChange && !ssAutofocusChange.isFirstChange()) {
      this.focus();
    }
  }
  focus() {
    if (this.ssAutofocus) {
      return;
    }
    this.element.focus && this.element.focus();
  }
};
AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) {
  return new (t || AutofocusDirective)(ɵɵdirectiveInject(ElementRef, 1));
};
AutofocusDirective.ɵdir = ɵɵdefineDirective({
  type: AutofocusDirective,
  selectors: [["", "ssAutofocus", ""]],
  inputs: {
    ssAutofocus: "ssAutofocus"
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutofocusDirective, [{
    type: Directive,
    args: [{
      selector: "[ssAutofocus]"
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Host
      }]
    }];
  }, {
    ssAutofocus: [{
      type: Input
    }]
  });
})();
var OffClickDirective = class {
  constructor() {
    this.onOffClick = new EventEmitter();
  }
  onClick(event) {
    this._clickEvent = event;
  }
  onTouch(event) {
    this._touchEvent = event;
  }
  onDocumentClick(event) {
    if (event !== this._clickEvent) {
      this.onOffClick.emit(event);
    }
  }
  onDocumentTouch(event) {
    if (event !== this._touchEvent) {
      this.onOffClick.emit(event);
    }
  }
};
OffClickDirective.ɵfac = function OffClickDirective_Factory(t) {
  return new (t || OffClickDirective)();
};
OffClickDirective.ɵdir = ɵɵdefineDirective({
  type: OffClickDirective,
  selectors: [["", "offClick", ""]],
  hostBindings: function OffClickDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function OffClickDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("touchstart", function OffClickDirective_touchstart_HostBindingHandler($event) {
        return ctx.onTouch($event);
      })("click", function OffClickDirective_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, ɵɵresolveDocument)("touchstart", function OffClickDirective_touchstart_HostBindingHandler($event) {
        return ctx.onDocumentTouch($event);
      }, false, ɵɵresolveDocument);
    }
  },
  outputs: {
    onOffClick: "offClick"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffClickDirective, [{
    type: Directive,
    args: [{
      // tslint:disable-next-line:directive-selector
      selector: "[offClick]"
    }]
  }], null, {
    onOffClick: [{
      type: Output,
      args: ["offClick"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onTouch: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }],
    onDocumentClick: [{
      type: HostListener,
      args: ["document:click", ["$event"]]
    }],
    onDocumentTouch: [{
      type: HostListener,
      args: ["document:touchstart", ["$event"]]
    }]
  });
})();
var MULTISELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxDropdownMultiselectComponent),
  multi: true
};
var NgxDropdownMultiselectComponent = class {
  get focusBack() {
    return this.settings.focusBack && this._focusBack;
  }
  set isVisible(val) {
    this.localIsVisible = val;
    this.workerDocClicked = val ? false : this.workerDocClicked;
  }
  get isVisible() {
    return this.localIsVisible;
  }
  get searchLimit() {
    return this.settings.searchRenderLimit;
  }
  get searchRenderAfter() {
    return this.settings.searchRenderAfter;
  }
  get searchLimitApplied() {
    return this.searchLimit > 0 && this.options.length > this.searchLimit;
  }
  constructor(fb, searchFilter, differs, cdRef) {
    this.fb = fb;
    this.searchFilter = searchFilter;
    this.cdRef = cdRef;
    this.localIsVisible = false;
    this.workerDocClicked = false;
    this.filterControl = this.fb.control("");
    this.disabled = false;
    this.disabledSelection = false;
    this.searchFunction = this._escapeRegExp;
    this.selectionLimitReached = new EventEmitter();
    this.dropdownClosed = new EventEmitter();
    this.dropdownOpened = new EventEmitter();
    this.added = new EventEmitter();
    this.removed = new EventEmitter();
    this.lazyLoad = new EventEmitter();
    this.filter = this.filterControl.valueChanges;
    this.destroyed$ = new Subject();
    this.filteredOptions = [];
    this.lazyLoadOptions = [];
    this.renderFilteredOptions = [];
    this.model = [];
    this.prevModel = [];
    this.numSelected = 0;
    this.renderItems = true;
    this.checkAllSearchRegister = /* @__PURE__ */ new Set();
    this.checkAllStatus = false;
    this.loadedValueIds = [];
    this._focusBack = false;
    this.defaultSettings = {
      closeOnClickOutside: true,
      pullRight: false,
      enableSearch: false,
      searchRenderLimit: 0,
      searchRenderAfter: 1,
      searchMaxLimit: 0,
      searchMaxRenderedItems: 0,
      checkedStyle: "checkboxes",
      buttonClasses: "btn btn-primary dropdown-toggle",
      containerClasses: "dropdown-inline",
      selectionLimit: 0,
      minSelectionLimit: 0,
      closeOnSelect: false,
      autoUnselect: false,
      showCheckAll: false,
      showUncheckAll: false,
      fixedTitle: false,
      dynamicTitleMaxItems: 3,
      maxHeight: "300px",
      isLazyLoad: false,
      stopScrollPropagation: false,
      loadViewDistance: 1,
      selectAddedValues: false,
      ignoreLabels: false,
      maintainSelectionOrderInTitle: false,
      focusBack: true
    };
    this.defaultTexts = {
      checkAll: "Select all",
      uncheckAll: "Unselect all",
      checked: "selected",
      checkedPlural: "selected",
      searchPlaceholder: "Search...",
      searchEmptyResult: "Nothing found...",
      searchNoRenderText: "Type in search box to see results...",
      defaultTitle: "Select",
      allSelected: "All selected"
    };
    this.onModelChange = (_) => {
    };
    this.onModelTouched = () => {
    };
    this.differ = differs.find([]).create(null);
    this.settings = this.defaultSettings;
    this.texts = this.defaultTexts;
  }
  clickedOutside() {
    if (!this.isVisible || !this.settings.closeOnClickOutside) {
      return;
    }
    this.isVisible = false;
    this._focusBack = true;
    this.dropdownClosed.emit();
  }
  getItemStyle(option) {
    const style = {};
    if (!option.isLabel) {
      style["cursor"] = "pointer";
    }
    if (option.disabled) {
      style["cursor"] = "default";
    }
  }
  getItemStyleSelectionDisabled() {
    if (this.disabledSelection) {
      return {
        cursor: "default"
      };
    }
  }
  ngOnInit() {
    this.title = this.texts.defaultTitle || "";
    this.filterControl.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.updateRenderItems();
      if (this.settings.isLazyLoad) {
        this.load();
      }
    });
  }
  ngOnChanges(changes) {
    if (changes["options"]) {
      this.options = this.options || [];
      this.parents = this.options.filter((option) => typeof option.parentId === "number").map((option) => option.parentId);
      this.updateRenderItems();
      if (this.settings.isLazyLoad && this.settings.selectAddedValues && this.loadedValueIds.length === 0) {
        this.loadedValueIds = this.loadedValueIds.concat(changes.options.currentValue.map((value) => value.id));
      }
      if (this.settings.isLazyLoad && this.settings.selectAddedValues && changes.options.previousValue) {
        const addedValues = changes.options.currentValue.filter((value) => this.loadedValueIds.indexOf(value.id) === -1);
        this.loadedValueIds.concat(addedValues.map((value) => value.id));
        if (this.checkAllStatus) {
          this.addChecks(addedValues);
        } else if (this.checkAllSearchRegister.size > 0) {
          this.checkAllSearchRegister.forEach((searchValue) => this.addChecks(this.applyFilters(addedValues, searchValue)));
        }
      }
      if (this.texts) {
        this.updateTitle();
      }
      this.fireModelChange();
    }
    if (changes["settings"]) {
      this.settings = __spreadValues(__spreadValues({}, this.defaultSettings), this.settings);
    }
    if (changes["texts"]) {
      this.texts = __spreadValues(__spreadValues({}, this.defaultTexts), this.texts);
      if (!changes["texts"].isFirstChange()) {
        this.updateTitle();
      }
    }
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
  updateRenderItems() {
    this.renderItems = !this.searchLimitApplied || this.filterControl.value.length >= this.searchRenderAfter;
    this.filteredOptions = this.applyFilters(this.options, this.settings.isLazyLoad ? "" : this.filterControl.value);
    this.renderFilteredOptions = this.renderItems ? this.filteredOptions : [];
    this.focusedItem = void 0;
  }
  applyFilters(options, value) {
    return this.searchFilter.transform(options, value, this.settings.searchMaxLimit, this.settings.searchMaxRenderedItems, this.searchFunction);
  }
  fireModelChange() {
    if (this.model != this.prevModel) {
      this.prevModel = this.model;
      this.onModelChange(this.model);
      this.onModelTouched();
      this.cdRef.markForCheck();
    }
  }
  writeValue(value) {
    if (value !== void 0 && value !== null) {
      this.model = Array.isArray(value) ? value : [value];
      this.ngDoCheck();
    } else {
      this.model = [];
    }
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  ngDoCheck() {
    const changes = this.differ.diff(this.model);
    if (changes) {
      this.updateNumSelected();
      this.updateTitle();
    }
  }
  validate(_c) {
    if (this.model && this.model.length) {
      return {
        required: {
          valid: false
        }
      };
    }
    if (this.options.filter((o) => this.model.indexOf(o.id) && !o.disabled).length === 0) {
      return {
        selection: {
          valid: false
        }
      };
    }
    return null;
  }
  registerOnValidatorChange(_fn) {
    throw new Error("Method not implemented.");
  }
  clearSearch(event) {
    this.maybeStopPropagation(event);
    this.filterControl.setValue("");
  }
  toggleDropdown(e) {
    if (this.isVisible) {
      this._focusBack = true;
    }
    this.isVisible = !this.isVisible;
    this.isVisible ? this.dropdownOpened.emit() : this.dropdownClosed.emit();
    this.focusedItem = void 0;
  }
  closeDropdown(e) {
    this.isVisible = true;
    this.toggleDropdown(e);
  }
  isSelected(option) {
    return this.model && this.model.indexOf(option.id) > -1;
  }
  setSelected(_event, option) {
    if (option.isLabel) {
      return;
    }
    if (option.disabled) {
      return;
    }
    if (this.disabledSelection) {
      return;
    }
    setTimeout(() => {
      this.maybeStopPropagation(_event);
      this.maybePreventDefault(_event);
      const index = this.model.indexOf(option.id);
      const isAtSelectionLimit = this.settings.selectionLimit > 0 && this.model.length >= this.settings.selectionLimit;
      const removeItem = (idx, id) => {
        this.model.splice(idx, 1);
        this.removed.emit(id);
        if (this.settings.isLazyLoad && this.lazyLoadOptions.some((val) => val.id === id)) {
          this.lazyLoadOptions.splice(this.lazyLoadOptions.indexOf(this.lazyLoadOptions.find((val) => val.id === id)), 1);
        }
      };
      if (index > -1) {
        if (this.settings.minSelectionLimit === void 0 || this.numSelected > this.settings.minSelectionLimit) {
          removeItem(index, option.id);
        }
        const parentIndex = option.parentId && this.model.indexOf(option.parentId);
        if (parentIndex > -1) {
          removeItem(parentIndex, option.parentId);
        } else if (this.parents.indexOf(option.id) > -1) {
          this.options.filter((child) => this.model.indexOf(child.id) > -1 && child.parentId === option.id).forEach((child) => removeItem(this.model.indexOf(child.id), child.id));
        }
      } else if (isAtSelectionLimit && !this.settings.autoUnselect) {
        this.selectionLimitReached.emit(this.model.length);
        return;
      } else {
        const addItem = (id) => {
          this.model.push(id);
          this.added.emit(id);
          if (this.settings.isLazyLoad && !this.lazyLoadOptions.some((val) => val.id === id)) {
            this.lazyLoadOptions.push(option);
          }
        };
        addItem(option.id);
        if (!isAtSelectionLimit) {
          if (option.parentId && !this.settings.ignoreLabels) {
            const children = this.options.filter((child) => child.id !== option.id && child.parentId === option.parentId);
            if (children.every((child) => this.model.indexOf(child.id) > -1)) {
              addItem(option.parentId);
            }
          } else if (this.parents.indexOf(option.id) > -1) {
            const children = this.options.filter((child) => this.model.indexOf(child.id) < 0 && child.parentId === option.id);
            children.forEach((child) => addItem(child.id));
          }
        } else {
          removeItem(0, this.model[0]);
        }
      }
      if (this.settings.closeOnSelect) {
        this.toggleDropdown();
      }
      this.model = this.model.slice();
      this.fireModelChange();
    }, 0);
  }
  updateNumSelected() {
    this.numSelected = this.model.filter((id) => this.parents.indexOf(id) < 0).length || 0;
  }
  updateTitle() {
    let numSelectedOptions = this.options.length;
    if (this.settings.ignoreLabels) {
      numSelectedOptions = this.options.filter((option) => !option.isLabel).length;
    }
    if (this.numSelected === 0 || this.settings.fixedTitle) {
      this.title = this.texts ? this.texts.defaultTitle : "";
    } else if (this.settings.displayAllSelectedText && this.model.length === numSelectedOptions) {
      this.title = this.texts ? this.texts.allSelected : "";
    } else if (this.settings.dynamicTitleMaxItems && this.settings.dynamicTitleMaxItems >= this.numSelected) {
      const useOptions = this.settings.isLazyLoad && this.lazyLoadOptions.length ? this.lazyLoadOptions : this.options;
      let titleSelections;
      if (this.settings.maintainSelectionOrderInTitle) {
        const optionIds = useOptions.map((selectOption, idx) => selectOption.id);
        titleSelections = this.model.map((selectedId) => optionIds.indexOf(selectedId)).filter((optionIndex) => optionIndex > -1).map((optionIndex) => useOptions[optionIndex]);
      } else {
        titleSelections = useOptions.filter((option) => this.model.indexOf(option.id) > -1);
      }
      this.title = titleSelections.map((option) => option.name).join(", ");
    } else {
      this.title = this.numSelected + " " + (this.numSelected === 1 ? this.texts.checked : this.texts.checkedPlural);
    }
    this.cdRef.markForCheck();
  }
  searchFilterApplied() {
    return this.settings.enableSearch && this.filterControl.value && this.filterControl.value.length > 0;
  }
  addChecks(options) {
    const checkedOptions = options.filter((option) => {
      if (!option.disabled && this.model.indexOf(option.id) === -1 && !(this.settings.ignoreLabels && option.isLabel)) {
        this.added.emit(option.id);
        return true;
      }
      return false;
    }).map((option) => option.id);
    this.model = this.model.concat(checkedOptions);
  }
  checkAll() {
    if (!this.disabledSelection) {
      this.addChecks(!this.searchFilterApplied() ? this.options : this.filteredOptions);
      if (this.settings.isLazyLoad && this.settings.selectAddedValues) {
        if (this.searchFilterApplied() && !this.checkAllStatus) {
          this.checkAllSearchRegister.add(this.filterControl.value);
        } else {
          this.checkAllSearchRegister.clear();
          this.checkAllStatus = true;
        }
        this.load();
      }
      this.fireModelChange();
    }
  }
  uncheckAll() {
    if (!this.disabledSelection) {
      const checkedOptions = this.model;
      let unCheckedOptions = !this.searchFilterApplied() ? this.model : this.filteredOptions.map((option) => option.id);
      unCheckedOptions = checkedOptions.filter((item) => unCheckedOptions.indexOf(item) > -1);
      this.model = this.model.filter((id) => {
        if (unCheckedOptions.indexOf(id) < 0 && this.settings.minSelectionLimit === void 0 || unCheckedOptions.indexOf(id) < this.settings.minSelectionLimit) {
          return true;
        } else {
          this.removed.emit(id);
          return false;
        }
      });
      if (this.settings.isLazyLoad && this.settings.selectAddedValues) {
        if (this.searchFilterApplied()) {
          if (this.checkAllSearchRegister.has(this.filterControl.value)) {
            this.checkAllSearchRegister.delete(this.filterControl.value);
            this.checkAllSearchRegister.forEach(function(searchTerm) {
              const filterOptions = this.applyFilters(this.options.filter((option) => unCheckedOptions.indexOf(option.id) > -1), searchTerm);
              this.addChecks(filterOptions);
            });
          }
        } else {
          this.checkAllSearchRegister.clear();
          this.checkAllStatus = false;
        }
        this.load();
      }
      this.fireModelChange();
    }
  }
  preventCheckboxCheck(event, option) {
    if (option.disabled || this.settings.selectionLimit && !this.settings.autoUnselect && this.model.length >= this.settings.selectionLimit && this.model.indexOf(option.id) === -1 && this.maybePreventDefault(event)) {
      this.maybePreventDefault(event);
    }
  }
  isCheckboxDisabled(option) {
    return this.disabledSelection || option && option.disabled;
  }
  checkScrollPosition(ev) {
    const scrollTop = ev.target.scrollTop;
    const scrollHeight = ev.target.scrollHeight;
    const scrollElementHeight = ev.target.clientHeight;
    const roundingPixel = 1;
    const gutterPixel = 1;
    if (scrollTop >= scrollHeight - (1 + this.settings.loadViewDistance) * scrollElementHeight - roundingPixel - gutterPixel) {
      this.load();
    }
  }
  checkScrollPropagation(ev, element) {
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const scrollElementHeight = element.clientHeight;
    if (ev.deltaY > 0 && scrollTop + scrollElementHeight >= scrollHeight || ev.deltaY < 0 && scrollTop <= 0) {
      ev = ev || window.event;
      this.maybePreventDefault(ev);
      ev.returnValue = false;
    }
  }
  trackById(idx, selectOption) {
    return selectOption.id;
  }
  load() {
    this.lazyLoad.emit({
      length: this.options.length,
      filter: this.filterControl.value,
      checkAllSearches: this.checkAllSearchRegister,
      checkAllStatus: this.checkAllStatus
    });
  }
  focusItem(dir, e) {
    if (!this.isVisible) {
      return;
    }
    this.maybePreventDefault(e);
    const idx = this.filteredOptions.indexOf(this.focusedItem);
    if (idx === -1) {
      this.focusedItem = this.filteredOptions[0];
      return;
    }
    const nextIdx = idx + dir;
    const newIdx = nextIdx < 0 ? this.filteredOptions.length - 1 : nextIdx % this.filteredOptions.length;
    this.focusedItem = this.filteredOptions[newIdx];
  }
  maybePreventDefault(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
  }
  maybeStopPropagation(e) {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
  }
  _escapeRegExp(str) {
    const regExpStr = str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    return new RegExp(regExpStr, "i");
  }
};
NgxDropdownMultiselectComponent.ɵfac = function NgxDropdownMultiselectComponent_Factory(t) {
  return new (t || NgxDropdownMultiselectComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(MultiSelectSearchFilter), ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(ChangeDetectorRef));
};
NgxDropdownMultiselectComponent.ɵcmp = ɵɵdefineComponent({
  type: NgxDropdownMultiselectComponent,
  selectors: [["ngx-bootstrap-multiselect"]],
  inputs: {
    options: "options",
    settings: "settings",
    texts: "texts",
    disabled: "disabled",
    disabledSelection: "disabledSelection",
    searchFunction: "searchFunction"
  },
  outputs: {
    selectionLimitReached: "selectionLimitReached",
    dropdownClosed: "dropdownClosed",
    dropdownOpened: "dropdownOpened",
    added: "added",
    removed: "removed",
    lazyLoad: "lazyLoad",
    filter: "filter"
  },
  features: [ɵɵProvidersFeature([MULTISELECT_VALUE_ACCESSOR, MultiSelectSearchFilter]), ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [["class", "dropdown", 3, "ngClass", "open", "offClick", 4, "ngIf"], [1, "dropdown", 3, "ngClass", "offClick"], ["type", "button", 1, "dropdown-toggle", 3, "ngClass", "disabled", "ssAutofocus", "click"], [1, "caret"], ["class", "dropdown-menu", "style", "display: block; height: auto; overflow-y: auto;", 3, "ngClass", "pull-right", "dropdown-menu-right", "max-height", "scroll", "wheel", "keydown.tab", "keydown.shift.tab", 4, "ngIf"], [1, "dropdown-menu", 2, "display", "block", "height", "auto", "overflow-y", "auto", 3, "ngClass", "scroll", "wheel", "keydown.tab", "keydown.shift.tab"], ["scroller", ""], ["class", "input-group search-container", 4, "ngIf"], ["role", "menuitem", "href", "javascript:;", "tabindex", "-1", "class", "dropdown-item check-control check-control-check", 3, "click", 4, "ngIf"], ["role", "menuitem", "href", "javascript:;", "tabindex", "-1", "class", "dropdown-item check-control check-control-uncheck", 3, "click", 4, "ngIf"], ["href", "javascript:;", "class", "dropdown-divider divider", 4, "ngIf"], ["href", "javascript:;", "class", "dropdown-item empty", 4, "ngIf"], ["class", "dropdown-item", "href", "javascript:;", "tabindex", "-1", 3, "active", "ngStyle", "ngClass", "dropdown-header", "ssAutofocus", "click", "keydown.space", "keydown.enter", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "input-group", "search-container"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["type", "text", 1, "form-control", 3, "ssAutofocus", "formControl", "placeholder"], ["class", "input-group-append", 4, "ngIf"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-default", "btn-secondary", 3, "click"], [1, "fa", "fa-times"], ["role", "menuitem", "href", "javascript:;", "tabindex", "-1", 1, "dropdown-item", "check-control", "check-control-check", 3, "click"], [2, "width", "16px"], [3, "ngClass"], ["role", "menuitem", "href", "javascript:;", "tabindex", "-1", 1, "dropdown-item", "check-control", "check-control-uncheck", 3, "click"], ["href", "javascript:;", 1, "dropdown-divider", "divider"], ["href", "javascript:;", 1, "dropdown-item", "empty"], ["href", "javascript:;", "tabindex", "-1", 1, "dropdown-item", 3, "ngStyle", "ngClass", "ssAutofocus", "click", "keydown.space", "keydown.enter"], ["role", "menuitem", "tabindex", "-1", 3, "padding-left", "ngStyle", 4, "ngIf", "ngIfElse"], ["label", ""], ["role", "menuitem", "tabindex", "-1", 3, "ngStyle"], [3, "ngSwitch"], ["type", "checkbox", 3, "checked", "disabled", "ngStyle", "click", 4, "ngSwitchCase"], ["style", "width: 16px;", "class", "glyphicon", 3, "glyphicon-ok", "glyphicon-lock", 4, "ngSwitchCase"], ["style", "width: 16px;display: inline-block;", 4, "ngSwitchCase"], ["style", "display:block;float:left; border-radius: 0.2em; border: 0.1em solid rgba(44, 44, 44, 0.63);background:rgba(0, 0, 0, 0.1);width: 5.5em;", 4, "ngSwitchCase"], ["type", "checkbox", 3, "checked", "disabled", "ngStyle", "click"], [1, "glyphicon", 2, "width", "16px"], [2, "width", "16px", "display", "inline-block"], [4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["aria-hidden", "true", 1, "fa", "fa-lock"], [2, "display", "block", "float", "left", "border-radius", "0.2em", "border", "0.1em solid rgba(44, 44, 44, 0.63)", "background", "rgba(0, 0, 0, 0.1)", "width", "5.5em"], [1, "slider", 3, "ngClass"], ["style", "height: 100%; width: 100%; object-fit: contain", 3, "src", 4, "ngIf"], ["style", "height: 100%; width: 100%;text-align: center; display: table; background-color:rgba(0, 0, 0, 0.74)", 4, "ngIf"], [2, "height", "100%", "width", "100%", "object-fit", "contain", 3, "src"], [2, "height", "100%", "width", "100%", "text-align", "center", "display", "table", "background-color", "rgba(0, 0, 0, 0.74)"], [1, "content_wrapper"], [1, "glyphicon", "glyphicon-eye-close", 2, "font-size", "3em", "color", "white"]],
  template: function NgxDropdownMultiselectComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NgxDropdownMultiselectComponent_div_0_Template, 5, 8, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.options);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchCase, DefaultValueAccessor, NgControlStatus, FormControlDirective, AutofocusDirective, OffClickDirective],
  styles: ["a[_ngcontent-%COMP%]{outline:none!important}.dropdown-inline[_ngcontent-%COMP%]{display:inline-block}.dropdown-toggle[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%]{margin-left:4px;white-space:nowrap;display:inline-block}.chunkydropdown-menu[_ngcontent-%COMP%]{min-width:20em}.chunkyrow[_ngcontent-%COMP%]{line-height:2;margin-left:1em;font-size:2em}.slider[_ngcontent-%COMP%]{width:3.8em;height:3.8em;display:block;transition:all .125s linear;margin-left:.125em;margin-top:auto}.slideron[_ngcontent-%COMP%]{margin-left:1.35em}.content_wrapper[_ngcontent-%COMP%]{display:table-cell;vertical-align:middle}.search-container[_ngcontent-%COMP%]{padding:0 5px 5px}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDropdownMultiselectComponent, [{
    type: Component,
    args: [{
      selector: "ngx-bootstrap-multiselect",
      providers: [MULTISELECT_VALUE_ACCESSOR, MultiSelectSearchFilter],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div *ngIf="options" class="dropdown" [ngClass]="settings.containerClasses" [class.open]="isVisible" (offClick)="clickedOutside()">
  <button type="button" class="dropdown-toggle" [ngClass]="settings.buttonClasses" (click)="toggleDropdown($event)" [disabled]="disabled"
    [ssAutofocus]="!focusBack">
    {{ title }}
    <span class="caret"></span>
  </button>
  <div #scroller *ngIf="isVisible" class="dropdown-menu" [ngClass]="{'chunkydropdown-menu': settings.checkedStyle == 'visual' }"
    (scroll)="settings.isLazyLoad ? checkScrollPosition($event) : null" (wheel)="settings.stopScrollPropagation ? checkScrollPropagation($event, scroller) : null"
    [class.pull-right]="settings.pullRight" [class.dropdown-menu-right]="settings.pullRight" [style.max-height]="settings.maxHeight"
    style="display: block; height: auto; overflow-y: auto;" (keydown.tab)="focusItem(1, $event)" (keydown.shift.tab)="focusItem(-1, $event)">
    <div class="input-group search-container" *ngIf="settings.enableSearch && (renderFilteredOptions.length > 1 || filterControl.value.length > 0)">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>
      </div>
      <input type="text" class="form-control" [ssAutofocus] [formControl]="filterControl" [placeholder]="texts.searchPlaceholder"
        class="form-control">
      <div class="input-group-append" *ngIf="filterControl.value.length>0">
        <button class="btn btn-default btn-secondary" type="button" (click)="clearSearch($event)">
          <i class="fa fa-times"></i>
        </button>
      </div>
    </div>
    <a role="menuitem" href="javascript:;" tabindex="-1" class="dropdown-item check-control check-control-check" *ngIf="settings.showCheckAll && !disabledSelection && renderFilteredOptions.length > 1"
      (click)="checkAll()">
      <span style="width: 16px;"><span [ngClass]="{'glyphicon glyphicon-ok': settings.checkedStyle !== 'fontawesome','fa fa-check': settings.checkedStyle === 'fontawesome'}"></span></span>
      {{ texts.checkAll }}
    </a>
    <a role="menuitem" href="javascript:;" tabindex="-1" class="dropdown-item check-control check-control-uncheck" *ngIf="settings.showUncheckAll && !disabledSelection && renderFilteredOptions.length > 1"
      (click)="uncheckAll()">
      <span style="width: 16px;"><span [ngClass]="{'glyphicon glyphicon-remove': settings.checkedStyle !== 'fontawesome','fa fa-times': settings.checkedStyle === 'fontawesome'}"></span></span>
      {{ texts.uncheckAll }}
    </a>
    <a *ngIf="settings.showCheckAll || settings.showUncheckAll" href="javascript:;" class="dropdown-divider divider"></a>
    <a *ngIf="!renderItems" href="javascript:;" class="dropdown-item empty">{{ texts.searchNoRenderText }}</a>
    <a *ngIf="renderItems && !renderFilteredOptions.length" href="javascript:;" class="dropdown-item empty">{{ texts.searchEmptyResult }}</a>
    <a class="dropdown-item" href="javascript:;" *ngFor="let option of renderFilteredOptions; trackBy: trackById" [class.active]="isSelected(option)"
      [ngStyle]="getItemStyle(option)" [ngClass]="option.classes" [class.dropdown-header]="option.isLabel" [ssAutofocus]="option !== focusedItem"
      tabindex="-1" (click)="setSelected($event, option)" (keydown.space)="setSelected($event, option)" (keydown.enter)="setSelected($event, option)">
      <span *ngIf="!option.isLabel; else label" role="menuitem" tabindex="-1" [style.padding-left]="this.parents.length>0&&this.parents.indexOf(option.id)<0&&'30px'"
        [ngStyle]="getItemStyleSelectionDisabled()">
        <ng-container [ngSwitch]="settings.checkedStyle">
          <input *ngSwitchCase="'checkboxes'" type="checkbox" [checked]="isSelected(option)" (click)="preventCheckboxCheck($event, option)"
            [disabled]="isCheckboxDisabled(option)" [ngStyle]="getItemStyleSelectionDisabled()" />
          <span *ngSwitchCase="'glyphicon'" style="width: 16px;" class="glyphicon" [class.glyphicon-ok]="isSelected(option)" [class.glyphicon-lock]="isCheckboxDisabled(option)"></span>
          <span *ngSwitchCase="'fontawesome'" style="width: 16px;display: inline-block;">
            <span *ngIf="isSelected(option)"><i class="fa fa-check" aria-hidden="true"></i></span>
            <span *ngIf="isCheckboxDisabled(option)"><i class="fa fa-lock" aria-hidden="true"></i></span>
          </span>
          <span *ngSwitchCase="'visual'" style="display:block;float:left; border-radius: 0.2em; border: 0.1em solid rgba(44, 44, 44, 0.63);background:rgba(0, 0, 0, 0.1);width: 5.5em;">
            <div class="slider" [ngClass]="{'slideron': isSelected(option)}">
              <img *ngIf="option.image != null" [src]="option.image" style="height: 100%; width: 100%; object-fit: contain" />
              <div *ngIf="option.image == null" style="height: 100%; width: 100%;text-align: center; display: table; background-color:rgba(0, 0, 0, 0.74)">
                <div class="content_wrapper">
                  <span style="font-size:3em;color:white" class="glyphicon glyphicon-eye-close"></span>
                </div>
              </div>
            </div>
          </span>
        </ng-container>
        <span [ngClass]="{'chunkyrow': settings.checkedStyle == 'visual' }" [class.disabled]="isCheckboxDisabled(option)" [ngClass]="settings.itemClasses"
          [style.font-weight]="this.parents.indexOf(option.id)>=0?'bold':'normal'">
          {{ option.name }}
        </span>
      </span>
      <ng-template #label>
        <span [class.disabled]="isCheckboxDisabled(option)">{{ option.name }}</span>
      </ng-template>
    </a>
  </div>
</div>
`,
      styles: ["a{outline:none!important}.dropdown-inline{display:inline-block}.dropdown-toggle .caret{margin-left:4px;white-space:nowrap;display:inline-block}.chunkydropdown-menu{min-width:20em}.chunkyrow{line-height:2;margin-left:1em;font-size:2em}.slider{width:3.8em;height:3.8em;display:block;transition:all .125s linear;margin-left:.125em;margin-top:auto}.slideron{margin-left:1.35em}.content_wrapper{display:table-cell;vertical-align:middle}.search-container{padding:0 5px 5px}\n"]
    }]
  }], function() {
    return [{
      type: FormBuilder
    }, {
      type: MultiSelectSearchFilter
    }, {
      type: IterableDiffers
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    options: [{
      type: Input
    }],
    settings: [{
      type: Input
    }],
    texts: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    disabledSelection: [{
      type: Input
    }],
    searchFunction: [{
      type: Input
    }],
    selectionLimitReached: [{
      type: Output
    }],
    dropdownClosed: [{
      type: Output
    }],
    dropdownOpened: [{
      type: Output
    }],
    added: [{
      type: Output
    }],
    removed: [{
      type: Output
    }],
    lazyLoad: [{
      type: Output
    }],
    filter: [{
      type: Output
    }]
  });
})();
var NgxBootstrapMultiselectModule = class {
};
NgxBootstrapMultiselectModule.ɵfac = function NgxBootstrapMultiselectModule_Factory(t) {
  return new (t || NgxBootstrapMultiselectModule)();
};
NgxBootstrapMultiselectModule.ɵmod = ɵɵdefineNgModule({
  type: NgxBootstrapMultiselectModule,
  declarations: [NgxDropdownMultiselectComponent, MultiSelectSearchFilter, AutofocusDirective, OffClickDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NgxDropdownMultiselectComponent, MultiSelectSearchFilter]
});
NgxBootstrapMultiselectModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, ReactiveFormsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxBootstrapMultiselectModule, [{
    type: NgModule,
    args: [{
      declarations: [NgxDropdownMultiselectComponent, MultiSelectSearchFilter, AutofocusDirective, OffClickDirective],
      imports: [CommonModule, ReactiveFormsModule],
      exports: [NgxDropdownMultiselectComponent, MultiSelectSearchFilter]
    }]
  }], null, null);
})();
export {
  MultiSelectSearchFilter,
  NgxBootstrapMultiselectModule,
  NgxDropdownMultiselectComponent
};
//# sourceMappingURL=ngx-bootstrap-multiselect.js.map
