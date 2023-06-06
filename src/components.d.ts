/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BsCol {
        "name": string;
    }
    interface BsRow {
        "name": string;
    }
    interface BswcSection {
        "heading": string;
        "slug": string;
    }
}
declare global {
    interface HTMLBsColElement extends Components.BsCol, HTMLStencilElement {
    }
    var HTMLBsColElement: {
        prototype: HTMLBsColElement;
        new (): HTMLBsColElement;
    };
    interface HTMLBsRowElement extends Components.BsRow, HTMLStencilElement {
    }
    var HTMLBsRowElement: {
        prototype: HTMLBsRowElement;
        new (): HTMLBsRowElement;
    };
    interface HTMLBswcSectionElement extends Components.BswcSection, HTMLStencilElement {
    }
    var HTMLBswcSectionElement: {
        prototype: HTMLBswcSectionElement;
        new (): HTMLBswcSectionElement;
    };
    interface HTMLElementTagNameMap {
        "bs-col": HTMLBsColElement;
        "bs-row": HTMLBsRowElement;
        "bswc-section": HTMLBswcSectionElement;
    }
}
declare namespace LocalJSX {
    interface BsCol {
        "name"?: string;
    }
    interface BsRow {
        "name"?: string;
    }
    interface BswcSection {
        "heading"?: string;
        "slug"?: string;
    }
    interface IntrinsicElements {
        "bs-col": BsCol;
        "bs-row": BsRow;
        "bswc-section": BswcSection;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bs-col": LocalJSX.BsCol & JSXBase.HTMLAttributes<HTMLBsColElement>;
            "bs-row": LocalJSX.BsRow & JSXBase.HTMLAttributes<HTMLBsRowElement>;
            "bswc-section": LocalJSX.BswcSection & JSXBase.HTMLAttributes<HTMLBswcSectionElement>;
        }
    }
}
