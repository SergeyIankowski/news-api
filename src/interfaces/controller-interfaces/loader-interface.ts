import { GetRespData } from '../../objects-types/controller-types/get-resp-data';

export default interface LoaderInterface {
    getResp(obj: GetRespData, callback: () => void): void;
}
