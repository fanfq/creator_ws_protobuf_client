import * as $protobuf from "protobufjs";
/** Namespace tutorial. */
export namespace tutorial {

    /** MsgType enum. */
    enum MsgType {
        DEF = 0,
        MSG_REG = 1,
        MSG_REG_PUSH = 11,
        PING = 1001,
        PONG = 1901
    }

    /** Properties of a C2S. */
    interface IC2S {

        /** C2S timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a C2S. */
    class C2S implements IC2S {

        /**
         * Constructs a new C2S.
         * @param [properties] Properties to set
         */
        constructor(properties?: tutorial.IC2S);

        /** C2S timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new C2S instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S instance
         */
        public static create(properties?: tutorial.IC2S): tutorial.C2S;

        /**
         * Encodes the specified C2S message. Does not implicitly {@link tutorial.C2S.verify|verify} messages.
         * @param message C2S message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tutorial.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2S message, length delimited. Does not implicitly {@link tutorial.C2S.verify|verify} messages.
         * @param message C2S message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tutorial.IC2S, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2S message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tutorial.C2S;

        /**
         * Decodes a C2S message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tutorial.C2S;

        /**
         * Verifies a C2S message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2S message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2S
         */
        public static fromObject(object: { [k: string]: any }): tutorial.C2S;

        /**
         * Creates a plain object from a C2S message. Also converts values to other types if specified.
         * @param message C2S
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tutorial.C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2S to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C. */
    interface IS2C {

        /** S2C timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a S2C. */
    class S2C implements IS2C {

        /**
         * Constructs a new S2C.
         * @param [properties] Properties to set
         */
        constructor(properties?: tutorial.IS2C);

        /** S2C timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new S2C instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C instance
         */
        public static create(properties?: tutorial.IS2C): tutorial.S2C;

        /**
         * Encodes the specified S2C message. Does not implicitly {@link tutorial.S2C.verify|verify} messages.
         * @param message S2C message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tutorial.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C message, length delimited. Does not implicitly {@link tutorial.S2C.verify|verify} messages.
         * @param message S2C message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tutorial.IS2C, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tutorial.S2C;

        /**
         * Decodes a S2C message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tutorial.S2C;

        /**
         * Verifies a S2C message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C
         */
        public static fromObject(object: { [k: string]: any }): tutorial.S2C;

        /**
         * Creates a plain object from a S2C message. Also converts values to other types if specified.
         * @param message S2C
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tutorial.S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2SMsg. */
    interface IC2SMsg {

        /** C2SMsg c2s */
        c2s?: (tutorial.IC2S|null);
    }

    /** Represents a C2SMsg. */
    class C2SMsg implements IC2SMsg {

        /**
         * Constructs a new C2SMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: tutorial.IC2SMsg);

        /** C2SMsg c2s. */
        public c2s?: (tutorial.IC2S|null);

        /**
         * Creates a new C2SMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2SMsg instance
         */
        public static create(properties?: tutorial.IC2SMsg): tutorial.C2SMsg;

        /**
         * Encodes the specified C2SMsg message. Does not implicitly {@link tutorial.C2SMsg.verify|verify} messages.
         * @param message C2SMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tutorial.IC2SMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2SMsg message, length delimited. Does not implicitly {@link tutorial.C2SMsg.verify|verify} messages.
         * @param message C2SMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tutorial.IC2SMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2SMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2SMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tutorial.C2SMsg;

        /**
         * Decodes a C2SMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2SMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tutorial.C2SMsg;

        /**
         * Verifies a C2SMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2SMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2SMsg
         */
        public static fromObject(object: { [k: string]: any }): tutorial.C2SMsg;

        /**
         * Creates a plain object from a C2SMsg message. Also converts values to other types if specified.
         * @param message C2SMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tutorial.C2SMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2SMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2CMsg. */
    interface IS2CMsg {

        /** S2CMsg code */
        code?: (number|null);

        /** S2CMsg msg */
        msg?: (string|null);

        /** S2CMsg s2c */
        s2c?: (tutorial.IS2C|null);
    }

    /** Represents a S2CMsg. */
    class S2CMsg implements IS2CMsg {

        /**
         * Constructs a new S2CMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: tutorial.IS2CMsg);

        /** S2CMsg code. */
        public code: number;

        /** S2CMsg msg. */
        public msg: string;

        /** S2CMsg s2c. */
        public s2c?: (tutorial.IS2C|null);

        /**
         * Creates a new S2CMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2CMsg instance
         */
        public static create(properties?: tutorial.IS2CMsg): tutorial.S2CMsg;

        /**
         * Encodes the specified S2CMsg message. Does not implicitly {@link tutorial.S2CMsg.verify|verify} messages.
         * @param message S2CMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tutorial.IS2CMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2CMsg message, length delimited. Does not implicitly {@link tutorial.S2CMsg.verify|verify} messages.
         * @param message S2CMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tutorial.IS2CMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2CMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2CMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tutorial.S2CMsg;

        /**
         * Decodes a S2CMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2CMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tutorial.S2CMsg;

        /**
         * Verifies a S2CMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2CMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2CMsg
         */
        public static fromObject(object: { [k: string]: any }): tutorial.S2CMsg;

        /**
         * Creates a plain object from a S2CMsg message. Also converts values to other types if specified.
         * @param message S2CMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tutorial.S2CMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2CMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
