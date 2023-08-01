/* eslint-disable */
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'app';

export interface DataReqPdf {
  name: string;
  description: string;
  urlImage: string;
}

export interface DataRequest {
  name: string;
  message: string;
}

export interface DataResponse {
  success: boolean;
  message: string;
}

function createBaseDataReqPdf(): DataReqPdf {
  return { name: '', description: '', urlImage: '' };
}

export const DataReqPdf = {
  encode(
    message: DataReqPdf,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description);
    }
    if (message.urlImage !== '') {
      writer.uint32(26).string(message.urlImage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataReqPdf {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataReqPdf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.urlImage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataReqPdf {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      description: isSet(object.description) ? String(object.description) : '',
      urlImage: isSet(object.urlImage) ? String(object.urlImage) : '',
    };
  },

  toJSON(message: DataReqPdf): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.description !== '') {
      obj.description = message.description;
    }
    if (message.urlImage !== '') {
      obj.urlImage = message.urlImage;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataReqPdf>, I>>(base?: I): DataReqPdf {
    return DataReqPdf.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataReqPdf>, I>>(
    object: I,
  ): DataReqPdf {
    const message = createBaseDataReqPdf();
    message.name = object.name ?? '';
    message.description = object.description ?? '';
    message.urlImage = object.urlImage ?? '';
    return message;
  },
};

function createBaseDataRequest(): DataRequest {
  return { name: '', message: '' };
}

export const DataRequest = {
  encode(
    message: DataRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.message !== '') {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataRequest {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      message: isSet(object.message) ? String(object.message) : '',
    };
  },

  toJSON(message: DataRequest): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.message !== '') {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataRequest>, I>>(base?: I): DataRequest {
    return DataRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataRequest>, I>>(
    object: I,
  ): DataRequest {
    const message = createBaseDataRequest();
    message.name = object.name ?? '';
    message.message = object.message ?? '';
    return message;
  },
};

function createBaseDataResponse(): DataResponse {
  return { success: false, message: '' };
}

export const DataResponse = {
  encode(
    message: DataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.message !== '') {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.success = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      message: isSet(object.message) ? String(object.message) : '',
    };
  },

  toJSON(message: DataResponse): unknown {
    const obj: any = {};
    if (message.success === true) {
      obj.success = message.success;
    }
    if (message.message !== '') {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataResponse>, I>>(
    base?: I,
  ): DataResponse {
    return DataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataResponse>, I>>(
    object: I,
  ): DataResponse {
    const message = createBaseDataResponse();
    message.success = object.success ?? false;
    message.message = object.message ?? '';
    return message;
  },
};

export interface ProjectGrpc {
  Example(request: DataRequest): Promise<DataResponse>;
  CreatePdf(request: DataReqPdf): Promise<DataResponse>;
}

export const ProjectGrpcServiceName = 'app.ProjectGrpc';
export class ProjectGrpcClientImpl implements ProjectGrpc {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ProjectGrpcServiceName;
    this.rpc = rpc;
    this.Example = this.Example.bind(this);
    this.CreatePdf = this.CreatePdf.bind(this);
  }
  Example(request: DataRequest): Promise<DataResponse> {
    const data = DataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, 'Example', data);
    return promise.then((data) => DataResponse.decode(_m0.Reader.create(data)));
  }

  CreatePdf(request: DataReqPdf): Promise<DataResponse> {
    const data = DataReqPdf.encode(request).finish();
    const promise = this.rpc.request(this.service, 'CreatePdf', data);
    return promise.then((data) => DataResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P &
      { [K in keyof P]: Exact<P[K], I[K]> } &
      { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
