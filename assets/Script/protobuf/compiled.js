/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases 
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.tutorial = (function() {

    /**
     * Namespace tutorial.
     * @exports tutorial
     * @namespace
     */
    var tutorial = {};

    /**
     * MsgType enum.
     * @name tutorial.MsgType
     * @enum {string}
     * @property {number} DEF=0 DEF value
     * @property {number} MSG_REG=1 MSG_REG value
     * @property {number} MSG_REG_PUSH=11 MSG_REG_PUSH value
     * @property {number} PING=1001 PING value
     * @property {number} PONG=1901 PONG value
     */
    tutorial.MsgType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DEF"] = 0;
        values[valuesById[1] = "MSG_REG"] = 1;
        values[valuesById[11] = "MSG_REG_PUSH"] = 11;
        values[valuesById[1001] = "PING"] = 1001;
        values[valuesById[1901] = "PONG"] = 1901;
        return values;
    })();

    tutorial.C2S = (function() {

        /**
         * Properties of a C2S.
         * @memberof tutorial
         * @interface IC2S
         * @property {number|Long|null} [timestamp] C2S timestamp
         */

        /**
         * Constructs a new C2S.
         * @memberof tutorial
         * @classdesc Represents a C2S.
         * @implements IC2S
         * @constructor
         * @param {tutorial.IC2S=} [properties] Properties to set
         */
        function C2S(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2S timestamp.
         * @member {number|Long} timestamp
         * @memberof tutorial.C2S
         * @instance
         */
        C2S.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new C2S instance using the specified properties.
         * @function create
         * @memberof tutorial.C2S
         * @static
         * @param {tutorial.IC2S=} [properties] Properties to set
         * @returns {tutorial.C2S} C2S instance
         */
        C2S.create = function create(properties) {
            return new C2S(properties);
        };

        /**
         * Encodes the specified C2S message. Does not implicitly {@link tutorial.C2S.verify|verify} messages.
         * @function encode
         * @memberof tutorial.C2S
         * @static
         * @param {tutorial.IC2S} message C2S message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified C2S message, length delimited. Does not implicitly {@link tutorial.C2S.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tutorial.C2S
         * @static
         * @param {tutorial.IC2S} message C2S message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S message from the specified reader or buffer.
         * @function decode
         * @memberof tutorial.C2S
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tutorial.C2S} C2S
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tutorial.C2S();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tutorial.C2S
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tutorial.C2S} C2S
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S message.
         * @function verify
         * @memberof tutorial.C2S
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a C2S message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tutorial.C2S
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tutorial.C2S} C2S
         */
        C2S.fromObject = function fromObject(object) {
            if (object instanceof $root.tutorial.C2S)
                return object;
            var message = new $root.tutorial.C2S();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a C2S message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tutorial.C2S
         * @static
         * @param {tutorial.C2S} message C2S
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2S.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this C2S to JSON.
         * @function toJSON
         * @memberof tutorial.C2S
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2S.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2S;
    })();

    tutorial.S2C = (function() {

        /**
         * Properties of a S2C.
         * @memberof tutorial
         * @interface IS2C
         * @property {number|Long|null} [timestamp] S2C timestamp
         */

        /**
         * Constructs a new S2C.
         * @memberof tutorial
         * @classdesc Represents a S2C.
         * @implements IS2C
         * @constructor
         * @param {tutorial.IS2C=} [properties] Properties to set
         */
        function S2C(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C timestamp.
         * @member {number|Long} timestamp
         * @memberof tutorial.S2C
         * @instance
         */
        S2C.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new S2C instance using the specified properties.
         * @function create
         * @memberof tutorial.S2C
         * @static
         * @param {tutorial.IS2C=} [properties] Properties to set
         * @returns {tutorial.S2C} S2C instance
         */
        S2C.create = function create(properties) {
            return new S2C(properties);
        };

        /**
         * Encodes the specified S2C message. Does not implicitly {@link tutorial.S2C.verify|verify} messages.
         * @function encode
         * @memberof tutorial.S2C
         * @static
         * @param {tutorial.IS2C} message S2C message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified S2C message, length delimited. Does not implicitly {@link tutorial.S2C.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tutorial.S2C
         * @static
         * @param {tutorial.IS2C} message S2C message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C message from the specified reader or buffer.
         * @function decode
         * @memberof tutorial.S2C
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tutorial.S2C} S2C
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tutorial.S2C();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tutorial.S2C
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tutorial.S2C} S2C
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C message.
         * @function verify
         * @memberof tutorial.S2C
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a S2C message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tutorial.S2C
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tutorial.S2C} S2C
         */
        S2C.fromObject = function fromObject(object) {
            if (object instanceof $root.tutorial.S2C)
                return object;
            var message = new $root.tutorial.S2C();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a S2C message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tutorial.S2C
         * @static
         * @param {tutorial.S2C} message S2C
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2C.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this S2C to JSON.
         * @function toJSON
         * @memberof tutorial.S2C
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2C.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2C;
    })();

    tutorial.C2SMsg = (function() {

        /**
         * Properties of a C2SMsg.
         * @memberof tutorial
         * @interface IC2SMsg
         * @property {tutorial.IC2S|null} [c2s] C2SMsg c2s
         */

        /**
         * Constructs a new C2SMsg.
         * @memberof tutorial
         * @classdesc Represents a C2SMsg.
         * @implements IC2SMsg
         * @constructor
         * @param {tutorial.IC2SMsg=} [properties] Properties to set
         */
        function C2SMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2SMsg c2s.
         * @member {tutorial.IC2S|null|undefined} c2s
         * @memberof tutorial.C2SMsg
         * @instance
         */
        C2SMsg.prototype.c2s = null;

        /**
         * Creates a new C2SMsg instance using the specified properties.
         * @function create
         * @memberof tutorial.C2SMsg
         * @static
         * @param {tutorial.IC2SMsg=} [properties] Properties to set
         * @returns {tutorial.C2SMsg} C2SMsg instance
         */
        C2SMsg.create = function create(properties) {
            return new C2SMsg(properties);
        };

        /**
         * Encodes the specified C2SMsg message. Does not implicitly {@link tutorial.C2SMsg.verify|verify} messages.
         * @function encode
         * @memberof tutorial.C2SMsg
         * @static
         * @param {tutorial.IC2SMsg} message C2SMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2SMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.c2s != null && message.hasOwnProperty("c2s"))
                $root.tutorial.C2S.encode(message.c2s, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified C2SMsg message, length delimited. Does not implicitly {@link tutorial.C2SMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tutorial.C2SMsg
         * @static
         * @param {tutorial.IC2SMsg} message C2SMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2SMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2SMsg message from the specified reader or buffer.
         * @function decode
         * @memberof tutorial.C2SMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tutorial.C2SMsg} C2SMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2SMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tutorial.C2SMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.c2s = $root.tutorial.C2S.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2SMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tutorial.C2SMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tutorial.C2SMsg} C2SMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2SMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2SMsg message.
         * @function verify
         * @memberof tutorial.C2SMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2SMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.c2s != null && message.hasOwnProperty("c2s")) {
                var error = $root.tutorial.C2S.verify(message.c2s);
                if (error)
                    return "c2s." + error;
            }
            return null;
        };

        /**
         * Creates a C2SMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tutorial.C2SMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tutorial.C2SMsg} C2SMsg
         */
        C2SMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.tutorial.C2SMsg)
                return object;
            var message = new $root.tutorial.C2SMsg();
            if (object.c2s != null) {
                if (typeof object.c2s !== "object")
                    throw TypeError(".tutorial.C2SMsg.c2s: object expected");
                message.c2s = $root.tutorial.C2S.fromObject(object.c2s);
            }
            return message;
        };

        /**
         * Creates a plain object from a C2SMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tutorial.C2SMsg
         * @static
         * @param {tutorial.C2SMsg} message C2SMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2SMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.c2s = null;
            if (message.c2s != null && message.hasOwnProperty("c2s"))
                object.c2s = $root.tutorial.C2S.toObject(message.c2s, options);
            return object;
        };

        /**
         * Converts this C2SMsg to JSON.
         * @function toJSON
         * @memberof tutorial.C2SMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2SMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2SMsg;
    })();

    tutorial.S2CMsg = (function() {

        /**
         * Properties of a S2CMsg.
         * @memberof tutorial
         * @interface IS2CMsg
         * @property {number|null} [code] S2CMsg code
         * @property {string|null} [msg] S2CMsg msg
         * @property {tutorial.IS2C|null} [s2c] S2CMsg s2c
         */

        /**
         * Constructs a new S2CMsg.
         * @memberof tutorial
         * @classdesc Represents a S2CMsg.
         * @implements IS2CMsg
         * @constructor
         * @param {tutorial.IS2CMsg=} [properties] Properties to set
         */
        function S2CMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2CMsg code.
         * @member {number} code
         * @memberof tutorial.S2CMsg
         * @instance
         */
        S2CMsg.prototype.code = 0;

        /**
         * S2CMsg msg.
         * @member {string} msg
         * @memberof tutorial.S2CMsg
         * @instance
         */
        S2CMsg.prototype.msg = "";

        /**
         * S2CMsg s2c.
         * @member {tutorial.IS2C|null|undefined} s2c
         * @memberof tutorial.S2CMsg
         * @instance
         */
        S2CMsg.prototype.s2c = null;

        /**
         * Creates a new S2CMsg instance using the specified properties.
         * @function create
         * @memberof tutorial.S2CMsg
         * @static
         * @param {tutorial.IS2CMsg=} [properties] Properties to set
         * @returns {tutorial.S2CMsg} S2CMsg instance
         */
        S2CMsg.create = function create(properties) {
            return new S2CMsg(properties);
        };

        /**
         * Encodes the specified S2CMsg message. Does not implicitly {@link tutorial.S2CMsg.verify|verify} messages.
         * @function encode
         * @memberof tutorial.S2CMsg
         * @static
         * @param {tutorial.IS2CMsg} message S2CMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2CMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.s2c != null && message.hasOwnProperty("s2c"))
                $root.tutorial.S2C.encode(message.s2c, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified S2CMsg message, length delimited. Does not implicitly {@link tutorial.S2CMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tutorial.S2CMsg
         * @static
         * @param {tutorial.IS2CMsg} message S2CMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2CMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2CMsg message from the specified reader or buffer.
         * @function decode
         * @memberof tutorial.S2CMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tutorial.S2CMsg} S2CMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2CMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tutorial.S2CMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                case 3:
                    message.s2c = $root.tutorial.S2C.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2CMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tutorial.S2CMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tutorial.S2CMsg} S2CMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2CMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2CMsg message.
         * @function verify
         * @memberof tutorial.S2CMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2CMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.s2c != null && message.hasOwnProperty("s2c")) {
                var error = $root.tutorial.S2C.verify(message.s2c);
                if (error)
                    return "s2c." + error;
            }
            return null;
        };

        /**
         * Creates a S2CMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tutorial.S2CMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tutorial.S2CMsg} S2CMsg
         */
        S2CMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.tutorial.S2CMsg)
                return object;
            var message = new $root.tutorial.S2CMsg();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.s2c != null) {
                if (typeof object.s2c !== "object")
                    throw TypeError(".tutorial.S2CMsg.s2c: object expected");
                message.s2c = $root.tutorial.S2C.fromObject(object.s2c);
            }
            return message;
        };

        /**
         * Creates a plain object from a S2CMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tutorial.S2CMsg
         * @static
         * @param {tutorial.S2CMsg} message S2CMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2CMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.s2c = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.s2c != null && message.hasOwnProperty("s2c"))
                object.s2c = $root.tutorial.S2C.toObject(message.s2c, options);
            return object;
        };

        /**
         * Converts this S2CMsg to JSON.
         * @function toJSON
         * @memberof tutorial.S2CMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2CMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2CMsg;
    })();

    return tutorial;
})();

module.exports = $root;
