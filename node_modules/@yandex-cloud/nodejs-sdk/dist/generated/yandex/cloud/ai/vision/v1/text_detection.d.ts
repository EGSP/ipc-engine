import _m0 from "protobufjs/minimal";
import { Polygon } from "../../../../../yandex/cloud/ai/vision/v1/primitives";
export declare const protobufPackage = "yandex.cloud.ai.vision.v1";
export interface TextAnnotation {
    $type: "yandex.cloud.ai.vision.v1.TextAnnotation";
    /**
     * Pages of the recognized file.
     *
     * For JPEG and PNG files contains only 1 page.
     */
    pages: Page[];
}
export interface Page {
    $type: "yandex.cloud.ai.vision.v1.Page";
    /** Page width in pixels. */
    width: number;
    /** Page height in pixels. */
    height: number;
    /** Recognized text blocks in this page. */
    blocks: Block[];
    /** Recognized entities */
    entities: Entity[];
}
export interface Entity {
    $type: "yandex.cloud.ai.vision.v1.Entity";
    /** Entity name */
    name: string;
    /** Recognized entity text */
    text: string;
}
export interface Block {
    $type: "yandex.cloud.ai.vision.v1.Block";
    /** Area on the page where the text block is located. */
    boundingBox?: Polygon;
    /** Recognized lines in this block. */
    lines: Line[];
}
export interface Line {
    $type: "yandex.cloud.ai.vision.v1.Line";
    /** Area on the page where the line is located. */
    boundingBox?: Polygon;
    /** Recognized words in this line. */
    words: Word[];
    /** Confidence of the OCR results for the line. Range [0, 1]. */
    confidence: number;
}
export interface Word {
    $type: "yandex.cloud.ai.vision.v1.Word";
    /** Area on the page where the word is located. */
    boundingBox?: Polygon;
    /** Recognized word value. */
    text: string;
    /** Confidence of the OCR results for the word. Range [0, 1]. */
    confidence: number;
    /** A list of detected languages together with confidence. */
    languages: Word_DetectedLanguage[];
    /** Id of recognized word in entities array */
    entityIndex: number;
}
export interface Word_DetectedLanguage {
    $type: "yandex.cloud.ai.vision.v1.Word.DetectedLanguage";
    /** Detected language code. */
    languageCode: string;
    /** Confidence of detected language. Range [0, 1]. */
    confidence: number;
}
export declare const TextAnnotation: {
    $type: "yandex.cloud.ai.vision.v1.TextAnnotation";
    encode(message: TextAnnotation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TextAnnotation;
    fromJSON(object: any): TextAnnotation;
    toJSON(message: TextAnnotation): unknown;
    fromPartial<I extends {
        pages?: {
            width?: number | undefined;
            height?: number | undefined;
            blocks?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                lines?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        languages?: {
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            entities?: {
                name?: string | undefined;
                text?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        pages?: ({
            width?: number | undefined;
            height?: number | undefined;
            blocks?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                lines?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        languages?: {
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            entities?: {
                name?: string | undefined;
                text?: string | undefined;
            }[] | undefined;
        }[] & ({
            width?: number | undefined;
            height?: number | undefined;
            blocks?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                lines?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        languages?: {
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            entities?: {
                name?: string | undefined;
                text?: string | undefined;
            }[] | undefined;
        } & {
            width?: number | undefined;
            height?: number | undefined;
            blocks?: ({
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                lines?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        languages?: {
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
            }[] & ({
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                lines?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        languages?: {
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
            } & {
                boundingBox?: ({
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } & {
                    vertices?: ({
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] & ({
                        x?: number | undefined;
                        y?: number | undefined;
                    } & {
                        x?: number | undefined;
                        y?: number | undefined;
                    } & Record<Exclude<keyof I["pages"][number]["blocks"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["pages"][number]["blocks"][number]["boundingBox"]["vertices"], "$type" | keyof {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["pages"][number]["blocks"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                lines?: ({
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        languages?: {
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    confidence?: number | undefined;
                }[] & ({
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        languages?: {
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    confidence?: number | undefined;
                } & {
                    boundingBox?: ({
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } & {
                        vertices?: ({
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] & ({
                            x?: number | undefined;
                            y?: number | undefined;
                        } & {
                            x?: number | undefined;
                            y?: number | undefined;
                        } & Record<Exclude<keyof I["pages"][number]["blocks"][number]["lines"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["pages"][number]["blocks"][number]["lines"][number]["boundingBox"]["vertices"], "$type" | keyof {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["pages"][number]["blocks"][number]["lines"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                    words?: ({
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        languages?: {
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                        confidence?: number | undefined;
                    }[] & ({
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        languages?: {
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                        confidence?: number | undefined;
                    } & {
                        boundingBox?: ({
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } & {
                            vertices?: ({
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] & ({
                                x?: number | undefined;
                                y?: number | undefined;
                            } & {
                                x?: number | undefined;
                                y?: number | undefined;
                            } & Record<Exclude<keyof I["pages"][number]["blocks"][number]["lines"][number]["words"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["pages"][number]["blocks"][number]["lines"][number]["words"][number]["boundingBox"]["vertices"], "$type" | keyof {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["pages"][number]["blocks"][number]["lines"][number]["words"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                        languages?: ({
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        }[] & ({
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        } & {
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        } & Record<Exclude<keyof I["pages"][number]["blocks"][number]["lines"][number]["words"][number]["languages"][number], "$type" | "languageCode" | "confidence">, never>)[] & Record<Exclude<keyof I["pages"][number]["blocks"][number]["lines"][number]["words"][number]["languages"], "$type" | keyof {
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        }[]>, never>) | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                        confidence?: number | undefined;
                    } & Record<Exclude<keyof I["pages"][number]["blocks"][number]["lines"][number]["words"][number], "$type" | "boundingBox" | "languages" | "text" | "entityIndex" | "confidence">, never>)[] & Record<Exclude<keyof I["pages"][number]["blocks"][number]["lines"][number]["words"], "$type" | keyof {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        languages?: {
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                        confidence?: number | undefined;
                    }[]>, never>) | undefined;
                    confidence?: number | undefined;
                } & Record<Exclude<keyof I["pages"][number]["blocks"][number]["lines"][number], "$type" | "boundingBox" | "words" | "confidence">, never>)[] & Record<Exclude<keyof I["pages"][number]["blocks"][number]["lines"], "$type" | keyof {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        languages?: {
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    confidence?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["pages"][number]["blocks"][number], "$type" | "boundingBox" | "lines">, never>)[] & Record<Exclude<keyof I["pages"][number]["blocks"], "$type" | keyof {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                lines?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        languages?: {
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            entities?: ({
                name?: string | undefined;
                text?: string | undefined;
            }[] & ({
                name?: string | undefined;
                text?: string | undefined;
            } & {
                name?: string | undefined;
                text?: string | undefined;
            } & Record<Exclude<keyof I["pages"][number]["entities"][number], "$type" | "name" | "text">, never>)[] & Record<Exclude<keyof I["pages"][number]["entities"], "$type" | keyof {
                name?: string | undefined;
                text?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["pages"][number], "$type" | "width" | "height" | "blocks" | "entities">, never>)[] & Record<Exclude<keyof I["pages"], "$type" | keyof {
            width?: number | undefined;
            height?: number | undefined;
            blocks?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                lines?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        languages?: {
                            languageCode?: string | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            entities?: {
                name?: string | undefined;
                text?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "pages">, never>>(object: I): TextAnnotation;
};
export declare const Page: {
    $type: "yandex.cloud.ai.vision.v1.Page";
    encode(message: Page, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Page;
    fromJSON(object: any): Page;
    toJSON(message: Page): unknown;
    fromPartial<I extends {
        width?: number | undefined;
        height?: number | undefined;
        blocks?: {
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            lines?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                words?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    languages?: {
                        languageCode?: string | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        entities?: {
            name?: string | undefined;
            text?: string | undefined;
        }[] | undefined;
    } & {
        width?: number | undefined;
        height?: number | undefined;
        blocks?: ({
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            lines?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                words?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    languages?: {
                        languageCode?: string | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[] | undefined;
        }[] & ({
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            lines?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                words?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    languages?: {
                        languageCode?: string | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[] | undefined;
        } & {
            boundingBox?: ({
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } & {
                vertices?: ({
                    x?: number | undefined;
                    y?: number | undefined;
                }[] & ({
                    x?: number | undefined;
                    y?: number | undefined;
                } & {
                    x?: number | undefined;
                    y?: number | undefined;
                } & Record<Exclude<keyof I["blocks"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["blocks"][number]["boundingBox"]["vertices"], "$type" | keyof {
                    x?: number | undefined;
                    y?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["blocks"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
            lines?: ({
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                words?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    languages?: {
                        languageCode?: string | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[] & ({
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                words?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    languages?: {
                        languageCode?: string | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            } & {
                boundingBox?: ({
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } & {
                    vertices?: ({
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] & ({
                        x?: number | undefined;
                        y?: number | undefined;
                    } & {
                        x?: number | undefined;
                        y?: number | undefined;
                    } & Record<Exclude<keyof I["blocks"][number]["lines"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["blocks"][number]["lines"][number]["boundingBox"]["vertices"], "$type" | keyof {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["blocks"][number]["lines"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                words?: ({
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    languages?: {
                        languageCode?: string | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                    confidence?: number | undefined;
                }[] & ({
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    languages?: {
                        languageCode?: string | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                    confidence?: number | undefined;
                } & {
                    boundingBox?: ({
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } & {
                        vertices?: ({
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] & ({
                            x?: number | undefined;
                            y?: number | undefined;
                        } & {
                            x?: number | undefined;
                            y?: number | undefined;
                        } & Record<Exclude<keyof I["blocks"][number]["lines"][number]["words"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["blocks"][number]["lines"][number]["words"][number]["boundingBox"]["vertices"], "$type" | keyof {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["blocks"][number]["lines"][number]["words"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                    languages?: ({
                        languageCode?: string | undefined;
                        confidence?: number | undefined;
                    }[] & ({
                        languageCode?: string | undefined;
                        confidence?: number | undefined;
                    } & {
                        languageCode?: string | undefined;
                        confidence?: number | undefined;
                    } & Record<Exclude<keyof I["blocks"][number]["lines"][number]["words"][number]["languages"][number], "$type" | "languageCode" | "confidence">, never>)[] & Record<Exclude<keyof I["blocks"][number]["lines"][number]["words"][number]["languages"], "$type" | keyof {
                        languageCode?: string | undefined;
                        confidence?: number | undefined;
                    }[]>, never>) | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                    confidence?: number | undefined;
                } & Record<Exclude<keyof I["blocks"][number]["lines"][number]["words"][number], "$type" | "boundingBox" | "languages" | "text" | "entityIndex" | "confidence">, never>)[] & Record<Exclude<keyof I["blocks"][number]["lines"][number]["words"], "$type" | keyof {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    languages?: {
                        languageCode?: string | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                    confidence?: number | undefined;
                }[]>, never>) | undefined;
                confidence?: number | undefined;
            } & Record<Exclude<keyof I["blocks"][number]["lines"][number], "$type" | "boundingBox" | "words" | "confidence">, never>)[] & Record<Exclude<keyof I["blocks"][number]["lines"], "$type" | keyof {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                words?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    languages?: {
                        languageCode?: string | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["blocks"][number], "$type" | "boundingBox" | "lines">, never>)[] & Record<Exclude<keyof I["blocks"], "$type" | keyof {
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            lines?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                words?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    languages?: {
                        languageCode?: string | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        entities?: ({
            name?: string | undefined;
            text?: string | undefined;
        }[] & ({
            name?: string | undefined;
            text?: string | undefined;
        } & {
            name?: string | undefined;
            text?: string | undefined;
        } & Record<Exclude<keyof I["entities"][number], "$type" | "name" | "text">, never>)[] & Record<Exclude<keyof I["entities"], "$type" | keyof {
            name?: string | undefined;
            text?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "width" | "height" | "blocks" | "entities">, never>>(object: I): Page;
};
export declare const Entity: {
    $type: "yandex.cloud.ai.vision.v1.Entity";
    encode(message: Entity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Entity;
    fromJSON(object: any): Entity;
    toJSON(message: Entity): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        text?: string | undefined;
    } & {
        name?: string | undefined;
        text?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "text">, never>>(object: I): Entity;
};
export declare const Block: {
    $type: "yandex.cloud.ai.vision.v1.Block";
    encode(message: Block, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Block;
    fromJSON(object: any): Block;
    toJSON(message: Block): unknown;
    fromPartial<I extends {
        boundingBox?: {
            vertices?: {
                x?: number | undefined;
                y?: number | undefined;
            }[] | undefined;
        } | undefined;
        lines?: {
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            words?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                languages?: {
                    languageCode?: string | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                entityIndex?: number | undefined;
                confidence?: number | undefined;
            }[] | undefined;
            confidence?: number | undefined;
        }[] | undefined;
    } & {
        boundingBox?: ({
            vertices?: {
                x?: number | undefined;
                y?: number | undefined;
            }[] | undefined;
        } & {
            vertices?: ({
                x?: number | undefined;
                y?: number | undefined;
            }[] & ({
                x?: number | undefined;
                y?: number | undefined;
            } & {
                x?: number | undefined;
                y?: number | undefined;
            } & Record<Exclude<keyof I["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["boundingBox"]["vertices"], "$type" | keyof {
                x?: number | undefined;
                y?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["boundingBox"], "$type" | "vertices">, never>) | undefined;
        lines?: ({
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            words?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                languages?: {
                    languageCode?: string | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                entityIndex?: number | undefined;
                confidence?: number | undefined;
            }[] | undefined;
            confidence?: number | undefined;
        }[] & ({
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            words?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                languages?: {
                    languageCode?: string | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                entityIndex?: number | undefined;
                confidence?: number | undefined;
            }[] | undefined;
            confidence?: number | undefined;
        } & {
            boundingBox?: ({
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } & {
                vertices?: ({
                    x?: number | undefined;
                    y?: number | undefined;
                }[] & ({
                    x?: number | undefined;
                    y?: number | undefined;
                } & {
                    x?: number | undefined;
                    y?: number | undefined;
                } & Record<Exclude<keyof I["lines"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["lines"][number]["boundingBox"]["vertices"], "$type" | keyof {
                    x?: number | undefined;
                    y?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["lines"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
            words?: ({
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                languages?: {
                    languageCode?: string | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                entityIndex?: number | undefined;
                confidence?: number | undefined;
            }[] & ({
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                languages?: {
                    languageCode?: string | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                entityIndex?: number | undefined;
                confidence?: number | undefined;
            } & {
                boundingBox?: ({
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } & {
                    vertices?: ({
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] & ({
                        x?: number | undefined;
                        y?: number | undefined;
                    } & {
                        x?: number | undefined;
                        y?: number | undefined;
                    } & Record<Exclude<keyof I["lines"][number]["words"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["lines"][number]["words"][number]["boundingBox"]["vertices"], "$type" | keyof {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["lines"][number]["words"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                languages?: ({
                    languageCode?: string | undefined;
                    confidence?: number | undefined;
                }[] & ({
                    languageCode?: string | undefined;
                    confidence?: number | undefined;
                } & {
                    languageCode?: string | undefined;
                    confidence?: number | undefined;
                } & Record<Exclude<keyof I["lines"][number]["words"][number]["languages"][number], "$type" | "languageCode" | "confidence">, never>)[] & Record<Exclude<keyof I["lines"][number]["words"][number]["languages"], "$type" | keyof {
                    languageCode?: string | undefined;
                    confidence?: number | undefined;
                }[]>, never>) | undefined;
                text?: string | undefined;
                entityIndex?: number | undefined;
                confidence?: number | undefined;
            } & Record<Exclude<keyof I["lines"][number]["words"][number], "$type" | "boundingBox" | "languages" | "text" | "entityIndex" | "confidence">, never>)[] & Record<Exclude<keyof I["lines"][number]["words"], "$type" | keyof {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                languages?: {
                    languageCode?: string | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                entityIndex?: number | undefined;
                confidence?: number | undefined;
            }[]>, never>) | undefined;
            confidence?: number | undefined;
        } & Record<Exclude<keyof I["lines"][number], "$type" | "boundingBox" | "words" | "confidence">, never>)[] & Record<Exclude<keyof I["lines"], "$type" | keyof {
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            words?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                languages?: {
                    languageCode?: string | undefined;
                    confidence?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                entityIndex?: number | undefined;
                confidence?: number | undefined;
            }[] | undefined;
            confidence?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "boundingBox" | "lines">, never>>(object: I): Block;
};
export declare const Line: {
    $type: "yandex.cloud.ai.vision.v1.Line";
    encode(message: Line, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Line;
    fromJSON(object: any): Line;
    toJSON(message: Line): unknown;
    fromPartial<I extends {
        boundingBox?: {
            vertices?: {
                x?: number | undefined;
                y?: number | undefined;
            }[] | undefined;
        } | undefined;
        words?: {
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            languages?: {
                languageCode?: string | undefined;
                confidence?: number | undefined;
            }[] | undefined;
            text?: string | undefined;
            entityIndex?: number | undefined;
            confidence?: number | undefined;
        }[] | undefined;
        confidence?: number | undefined;
    } & {
        boundingBox?: ({
            vertices?: {
                x?: number | undefined;
                y?: number | undefined;
            }[] | undefined;
        } & {
            vertices?: ({
                x?: number | undefined;
                y?: number | undefined;
            }[] & ({
                x?: number | undefined;
                y?: number | undefined;
            } & {
                x?: number | undefined;
                y?: number | undefined;
            } & Record<Exclude<keyof I["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["boundingBox"]["vertices"], "$type" | keyof {
                x?: number | undefined;
                y?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["boundingBox"], "$type" | "vertices">, never>) | undefined;
        words?: ({
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            languages?: {
                languageCode?: string | undefined;
                confidence?: number | undefined;
            }[] | undefined;
            text?: string | undefined;
            entityIndex?: number | undefined;
            confidence?: number | undefined;
        }[] & ({
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            languages?: {
                languageCode?: string | undefined;
                confidence?: number | undefined;
            }[] | undefined;
            text?: string | undefined;
            entityIndex?: number | undefined;
            confidence?: number | undefined;
        } & {
            boundingBox?: ({
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } & {
                vertices?: ({
                    x?: number | undefined;
                    y?: number | undefined;
                }[] & ({
                    x?: number | undefined;
                    y?: number | undefined;
                } & {
                    x?: number | undefined;
                    y?: number | undefined;
                } & Record<Exclude<keyof I["words"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["words"][number]["boundingBox"]["vertices"], "$type" | keyof {
                    x?: number | undefined;
                    y?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["words"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
            languages?: ({
                languageCode?: string | undefined;
                confidence?: number | undefined;
            }[] & ({
                languageCode?: string | undefined;
                confidence?: number | undefined;
            } & {
                languageCode?: string | undefined;
                confidence?: number | undefined;
            } & Record<Exclude<keyof I["words"][number]["languages"][number], "$type" | "languageCode" | "confidence">, never>)[] & Record<Exclude<keyof I["words"][number]["languages"], "$type" | keyof {
                languageCode?: string | undefined;
                confidence?: number | undefined;
            }[]>, never>) | undefined;
            text?: string | undefined;
            entityIndex?: number | undefined;
            confidence?: number | undefined;
        } & Record<Exclude<keyof I["words"][number], "$type" | "boundingBox" | "languages" | "text" | "entityIndex" | "confidence">, never>)[] & Record<Exclude<keyof I["words"], "$type" | keyof {
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            languages?: {
                languageCode?: string | undefined;
                confidence?: number | undefined;
            }[] | undefined;
            text?: string | undefined;
            entityIndex?: number | undefined;
            confidence?: number | undefined;
        }[]>, never>) | undefined;
        confidence?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "boundingBox" | "words" | "confidence">, never>>(object: I): Line;
};
export declare const Word: {
    $type: "yandex.cloud.ai.vision.v1.Word";
    encode(message: Word, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Word;
    fromJSON(object: any): Word;
    toJSON(message: Word): unknown;
    fromPartial<I extends {
        boundingBox?: {
            vertices?: {
                x?: number | undefined;
                y?: number | undefined;
            }[] | undefined;
        } | undefined;
        languages?: {
            languageCode?: string | undefined;
            confidence?: number | undefined;
        }[] | undefined;
        text?: string | undefined;
        entityIndex?: number | undefined;
        confidence?: number | undefined;
    } & {
        boundingBox?: ({
            vertices?: {
                x?: number | undefined;
                y?: number | undefined;
            }[] | undefined;
        } & {
            vertices?: ({
                x?: number | undefined;
                y?: number | undefined;
            }[] & ({
                x?: number | undefined;
                y?: number | undefined;
            } & {
                x?: number | undefined;
                y?: number | undefined;
            } & Record<Exclude<keyof I["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["boundingBox"]["vertices"], "$type" | keyof {
                x?: number | undefined;
                y?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["boundingBox"], "$type" | "vertices">, never>) | undefined;
        languages?: ({
            languageCode?: string | undefined;
            confidence?: number | undefined;
        }[] & ({
            languageCode?: string | undefined;
            confidence?: number | undefined;
        } & {
            languageCode?: string | undefined;
            confidence?: number | undefined;
        } & Record<Exclude<keyof I["languages"][number], "$type" | "languageCode" | "confidence">, never>)[] & Record<Exclude<keyof I["languages"], "$type" | keyof {
            languageCode?: string | undefined;
            confidence?: number | undefined;
        }[]>, never>) | undefined;
        text?: string | undefined;
        entityIndex?: number | undefined;
        confidence?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "boundingBox" | "languages" | "text" | "entityIndex" | "confidence">, never>>(object: I): Word;
};
export declare const Word_DetectedLanguage: {
    $type: "yandex.cloud.ai.vision.v1.Word.DetectedLanguage";
    encode(message: Word_DetectedLanguage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Word_DetectedLanguage;
    fromJSON(object: any): Word_DetectedLanguage;
    toJSON(message: Word_DetectedLanguage): unknown;
    fromPartial<I extends {
        languageCode?: string | undefined;
        confidence?: number | undefined;
    } & {
        languageCode?: string | undefined;
        confidence?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "languageCode" | "confidence">, never>>(object: I): Word_DetectedLanguage;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | "$type">, never>;
export {};
