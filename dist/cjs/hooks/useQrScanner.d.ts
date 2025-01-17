/// <reference types="react" />
import { DecodeHintType } from '@zxing/library';
import { OnResultFunction, OnErrorFunction } from '../types';
export interface IUseQrScannerProps {
    onResult: OnResultFunction;
    onError: OnErrorFunction;
    scanDelay: number;
    constraints: MediaTrackConstraints;
    deviceId?: string;
    hints?: Map<DecodeHintType, any>;
    stopDecoding?: boolean;
}
export declare const useQrScanner: (props: IUseQrScannerProps) => {
    ref: import("react").RefObject<HTMLVideoElement>;
    start: () => Promise<void>;
    stop: boolean | undefined;
};
