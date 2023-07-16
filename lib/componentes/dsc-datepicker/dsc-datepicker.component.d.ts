import { AfterViewInit, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { TamanhoDatePickerEnum } from '../../enum/datePickerEnums';
import { tamanhoDatePickerType } from '../../types/datePickerTypes';
import { tipoTextoFeedBackType } from '../../types/inputTypes';
import * as ɵngcc0 from '@angular/core';
export declare class DscDatepickerComponent implements OnInit, OnChanges, AfterViewInit, ControlValueAccessor {
    controlDir: NgControl;
    dateInput: MatInput;
    elementRef: ElementRef;
    dscPlaceHolder?: string;
    dscPlaceHolder_: string;
    dscRotulo?: string;
    dscRotulo_: string;
    dscInformacaoAdicional?: string;
    dscInformacaoAdicional_?: string;
    dscIconeInformativo?: string;
    dscIconeInformativo_?: string;
    dscTipoTamanhoDatePicker: tamanhoDatePickerType;
    dscTipoTamanhoDatePicker_: TamanhoDatePickerEnum;
    dscTipoTextoFeedBack?: tipoTextoFeedBackType;
    dscTipoTextoFeedBack_: tipoTextoFeedBackType;
    dscTextoFeedBack?: string;
    dscTextoFeedBack_: string;
    mapaTamanhoDatePicker: Map<TamanhoDatePickerEnum, string>;
    mapaHeader: Map<TamanhoDatePickerEnum, string>;
    classeHeader: string;
    classFormField: string;
    classComplementar: string;
    icone_feedBack: string;
    mapaClasseIcone: Map<string, string>;
    classeBox: string;
    arrayType: string[];
    onChange: (_value: any) => void;
    onTouched: () => void;
    disabled: boolean;
    constructor(controlDir: NgControl);
    inicializarMapaIconeFeedback(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private _configurarInputMask;
    ngOnChanges(changes: SimpleChanges): void;
    aplicarClasseFeedBack(): void;
    aplicarClasseComplementar(): void;
    registerOnChange(fn: (value: any) => void): void;
    setDisabledState(disabled: boolean): void;
    writeValue(value: any): void;
    registerOnTouched(fn: () => void): void;
    inicializarMapaTamanhoInput(): void;
    inicializarMapaHeader(): void;
    aplicarClasseMatFormField(): void;
    isInvalid(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DscDatepickerComponent, [{ self: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DscDatepickerComponent, "dsc-datepicker", never, { "dscTipoTamanhoDatePicker": "dscTipoTamanhoDatePicker"; "dscPlaceHolder": "dscPlaceHolder"; "dscRotulo": "dscRotulo"; "dscInformacaoAdicional": "dscInformacaoAdicional"; "dscIconeInformativo": "dscIconeInformativo"; "dscTipoTextoFeedBack": "dscTipoTextoFeedBack"; "dscTextoFeedBack": "dscTextoFeedBack"; }, {}, never, never>;
}

//# sourceMappingURL=dsc-datepicker.component.d.ts.map