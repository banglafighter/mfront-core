import {mmReactCreateContext} from "mmcore";
import {MFrontAdapterData} from "./mfront-adapter-data";


export const MFrontAdapterContext = mmReactCreateContext<MFrontAdapterData | null>(null)
