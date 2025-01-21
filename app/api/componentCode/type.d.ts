import { ComponentCode } from "@/lib/db/componentCode/types"
import { Prompt } from "@/lib/db/componentCode/types"

declare namespace ComponentCodeApi {
  // list request
  export interface listRequest {
    codegenId: string
    page: number
    pageSize: number
    searchKeyword?: string
    filterField?: "all" | "name" | "description"
  }
  export interface listResponse {
    data: Array<
      Pick<ComponentCode, "_id" | "name" | "description"> & {
        latestVersionCode: string
      }
    >
    total: number
  }
  // detail request
  export interface detailRequest {
    id: string
    codegenId: string
  }
  // detail response
  export interface detailResponse {
    data: Pick<ComponentCode, "_id" | "name" | "description" | "versions"> & {
      codeRendererUrl: string
    }
  }

  // create request
  export interface createRequest {
    codegenId: string
    prompt: Prompt[]
  }

  // create response
  export type createResponse = ReadableStream

  // edit request
  export interface editRequest {
    codegenId: string
    prompt: Prompt[]
    component: {
      id: string
      name: string
      code: string
      prompt: Prompt[]
    }
  }

  // edit response
  export type editResponse = ReadableStream

  // save request
  export interface saveRequest {
    id: string
    versionId: string
    code: string
  }
}
