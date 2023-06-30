/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BswcCode {
        "hasExample": boolean;
        "language": string;
    }
    interface BswcSection {
        "hasExample": boolean;
        "heading": string;
        "language": string;
        "slug": string;
    }
    interface BwcCol {
    }
    interface BwcRow {
    }
}
declare global {
    interface HTMLBswcCodeElement extends Components.BswcCode, HTMLStencilElement {
    }
    var HTMLBswcCodeElement: {
        prototype: HTMLBswcCodeElement;
        new (): HTMLBswcCodeElement;
    };
    interface HTMLBswcSectionElement extends Components.BswcSection, HTMLStencilElement {
    }
    var HTMLBswcSectionElement: {
        prototype: HTMLBswcSectionElement;
        new (): HTMLBswcSectionElement;
    };
    interface HTMLBwcColElement extends Components.BwcCol, HTMLStencilElement {
    }
    var HTMLBwcColElement: {
        prototype: HTMLBwcColElement;
        new (): HTMLBwcColElement;
    };
    interface HTMLBwcRowElement extends Components.BwcRow, HTMLStencilElement {
    }
    var HTMLBwcRowElement: {
        prototype: HTMLBwcRowElement;
        new (): HTMLBwcRowElement;
    };
    interface HTMLElementTagNameMap {
        "bswc-code": HTMLBswcCodeElement;
        "bswc-section": HTMLBswcSectionElement;
        "bwc-col": HTMLBwcColElement;
        "bwc-row": HTMLBwcRowElement;
    }
}
declare namespace LocalJSX {
    interface BswcCode {
        "hasExample"?: boolean;
        "language"?: string;
    }
    interface BswcSection {
        "hasExample"?: boolean;
        "heading"?: string;
        "language"?: string;
        "slug"?: string;
    }
    interface BwcCol {
    }
    interface BwcRow {
    }
    interface IntrinsicElements {
        "bswc-code": BswcCode;
        "bswc-section": BswcSection;
        "bwc-col": BwcCol;
        "bwc-row": BwcRow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bswc-code": LocalJSX.BswcCode & JSXBase.HTMLAttributes<HTMLBswcCodeElement>;
            "bswc-section": LocalJSX.BswcSection & JSXBase.HTMLAttributes<HTMLBswcSectionElement>;
            "bwc-col": LocalJSX.BwcCol & JSXBase.HTMLAttributes<HTMLBwcColElement>;
            "bwc-row": LocalJSX.BwcRow & JSXBase.HTMLAttributes<HTMLBwcRowElement>;
        }
    }
}
