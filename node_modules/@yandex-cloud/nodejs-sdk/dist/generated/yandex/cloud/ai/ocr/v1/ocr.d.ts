import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.ai.ocr.v1";
export interface Polygon {
    $type: "yandex.cloud.ai.ocr.v1.Polygon";
    /** The bounding polygon vertices. */
    vertices: Vertex[];
}
export interface Vertex {
    $type: "yandex.cloud.ai.ocr.v1.Vertex";
    /** X coordinate in pixels. */
    x: number;
    /** Y coordinate in pixels. */
    y: number;
}
export interface TextAnnotation {
    $type: "yandex.cloud.ai.ocr.v1.TextAnnotation";
    /** Page width in pixels. */
    width: number;
    /** Page height in pixels. */
    height: number;
    /** Recognized text blocks in this page. */
    blocks: Block[];
    /** Recognized entities. */
    entities: Entity[];
}
export interface Entity {
    $type: "yandex.cloud.ai.ocr.v1.Entity";
    /** Entity name. */
    name: string;
    /** Recognized entity text. */
    text: string;
}
export interface Block {
    $type: "yandex.cloud.ai.ocr.v1.Block";
    /** Area on the page where the text block is located. */
    boundingBox?: Polygon;
    /** Recognized lines in this block. */
    lines: Line[];
    /** A list of detected languages */
    languages: Block_DetectedLanguage[];
}
export interface Block_DetectedLanguage {
    $type: "yandex.cloud.ai.ocr.v1.Block.DetectedLanguage";
    /** Detected language code. */
    languageCode: string;
}
export interface Line {
    $type: "yandex.cloud.ai.ocr.v1.Line";
    /** Area on the page where the line is located. */
    boundingBox?: Polygon;
    /** Recognized text. */
    text: string;
    /** Recognized words */
    words: Word[];
}
export interface Word {
    $type: "yandex.cloud.ai.ocr.v1.Word";
    /** Area on the page where the word is located. */
    boundingBox?: Polygon;
    /** Recognized word value. */
    text: string;
    /** ID of the recognized word in entities array. */
    entityIndex: number;
}
export declare const Polygon: {
    $type: "yandex.cloud.ai.ocr.v1.Polygon";
    encode(message: Polygon, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Polygon;
    fromJSON(object: any): Polygon;
    toJSON(message: Polygon): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["vertices"], "$type" | keyof {
            x?: number | undefined;
            y?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "vertices">, never>>(object: I): Polygon;
};
export declare const Vertex: {
    $type: "yandex.cloud.ai.ocr.v1.Vertex";
    encode(message: Vertex, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Vertex;
    fromJSON(object: any): Vertex;
    toJSON(message: Vertex): unknown;
    fromPartial<I extends {
        x?: number | undefined;
        y?: number | undefined;
    } & {
        x?: number | undefined;
        y?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "x" | "y">, never>>(object: I): Vertex;
};
export declare const TextAnnotation: {
    $type: "yandex.cloud.ai.ocr.v1.TextAnnotation";
    encode(message: TextAnnotation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TextAnnotation;
    fromJSON(object: any): TextAnnotation;
    toJSON(message: TextAnnotation): unknown;
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
                text?: string | undefined;
                words?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            languages?: {
                languageCode?: string | undefined;
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
                text?: string | undefined;
                words?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            languages?: {
                languageCode?: string | undefined;
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
                text?: string | undefined;
                words?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            languages?: {
                languageCode?: string | undefined;
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
                text?: string | undefined;
                words?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                }[] | undefined;
            }[] & ({
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                text?: string | undefined;
                words?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
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
                    } & Record<Exclude<keyof I["blocks"][number]["lines"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["blocks"][number]["lines"][number]["boundingBox"]["vertices"], "$type" | keyof {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["blocks"][number]["lines"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                text?: string | undefined;
                words?: ({
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                }[] & ({
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
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
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                } & Record<Exclude<keyof I["blocks"][number]["lines"][number]["words"][number], "$type" | "boundingBox" | "text" | "entityIndex">, never>)[] & Record<Exclude<keyof I["blocks"][number]["lines"][number]["words"], "$type" | keyof {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["blocks"][number]["lines"][number], "$type" | "boundingBox" | "text" | "words">, never>)[] & Record<Exclude<keyof I["blocks"][number]["lines"], "$type" | keyof {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                text?: string | undefined;
                words?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            languages?: ({
                languageCode?: string | undefined;
            }[] & ({
                languageCode?: string | undefined;
            } & {
                languageCode?: string | undefined;
            } & Record<Exclude<keyof I["blocks"][number]["languages"][number], "$type" | "languageCode">, never>)[] & Record<Exclude<keyof I["blocks"][number]["languages"], "$type" | keyof {
                languageCode?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["blocks"][number], "$type" | "boundingBox" | "lines" | "languages">, never>)[] & Record<Exclude<keyof I["blocks"], "$type" | keyof {
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
                text?: string | undefined;
                words?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    entityIndex?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            languages?: {
                languageCode?: string | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "width" | "height" | "blocks" | "entities">, never>>(object: I): TextAnnotation;
};
export declare const Entity: {
    $type: "yandex.cloud.ai.ocr.v1.Entity";
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
    $type: "yandex.cloud.ai.ocr.v1.Block";
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
            text?: string | undefined;
            words?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                text?: string | undefined;
                entityIndex?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        languages?: {
            languageCode?: string | undefined;
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
            text?: string | undefined;
            words?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                text?: string | undefined;
                entityIndex?: number | undefined;
            }[] | undefined;
        }[] & ({
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            text?: string | undefined;
            words?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                text?: string | undefined;
                entityIndex?: number | undefined;
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
                } & Record<Exclude<keyof I["lines"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["lines"][number]["boundingBox"]["vertices"], "$type" | keyof {
                    x?: number | undefined;
                    y?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["lines"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
            text?: string | undefined;
            words?: ({
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                text?: string | undefined;
                entityIndex?: number | undefined;
            }[] & ({
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                text?: string | undefined;
                entityIndex?: number | undefined;
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
                text?: string | undefined;
                entityIndex?: number | undefined;
            } & Record<Exclude<keyof I["lines"][number]["words"][number], "$type" | "boundingBox" | "text" | "entityIndex">, never>)[] & Record<Exclude<keyof I["lines"][number]["words"], "$type" | keyof {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                text?: string | undefined;
                entityIndex?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["lines"][number], "$type" | "boundingBox" | "text" | "words">, never>)[] & Record<Exclude<keyof I["lines"], "$type" | keyof {
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            text?: string | undefined;
            words?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                text?: string | undefined;
                entityIndex?: number | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        languages?: ({
            languageCode?: string | undefined;
        }[] & ({
            languageCode?: string | undefined;
        } & {
            languageCode?: string | undefined;
        } & Record<Exclude<keyof I["languages"][number], "$type" | "languageCode">, never>)[] & Record<Exclude<keyof I["languages"], "$type" | keyof {
            languageCode?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "boundingBox" | "lines" | "languages">, never>>(object: I): Block;
};
export declare const Block_DetectedLanguage: {
    $type: "yandex.cloud.ai.ocr.v1.Block.DetectedLanguage";
    encode(message: Block_DetectedLanguage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Block_DetectedLanguage;
    fromJSON(object: any): Block_DetectedLanguage;
    toJSON(message: Block_DetectedLanguage): unknown;
    fromPartial<I extends {
        languageCode?: string | undefined;
    } & {
        languageCode?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "languageCode">, never>>(object: I): Block_DetectedLanguage;
};
export declare const Line: {
    $type: "yandex.cloud.ai.ocr.v1.Line";
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
        text?: string | undefined;
        words?: {
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            text?: string | undefined;
            entityIndex?: number | undefined;
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
        text?: string | undefined;
        words?: ({
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            text?: string | undefined;
            entityIndex?: number | undefined;
        }[] & ({
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            text?: string | undefined;
            entityIndex?: number | undefined;
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
            text?: string | undefined;
            entityIndex?: number | undefined;
        } & Record<Exclude<keyof I["words"][number], "$type" | "boundingBox" | "text" | "entityIndex">, never>)[] & Record<Exclude<keyof I["words"], "$type" | keyof {
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
            text?: string | undefined;
            entityIndex?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "boundingBox" | "text" | "words">, never>>(object: I): Line;
};
export declare const Word: {
    $type: "yandex.cloud.ai.ocr.v1.Word";
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
        text?: string | undefined;
        entityIndex?: number | undefined;
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
        text?: string | undefined;
        entityIndex?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "boundingBox" | "text" | "entityIndex">, never>>(object: I): Word;
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
