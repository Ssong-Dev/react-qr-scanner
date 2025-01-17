import React, { CSSProperties, ReactElement } from 'react';
import { Result, DecodeHintType } from '@zxing/library';

type OnResultFunction = (result: Result) => void;
type OnErrorFunction = (error: Error) => void;

interface QrScannerProps {
    onError: OnErrorFunction;
    onResult?: OnResultFunction;
    containerStyle?: CSSProperties;
    videoStyle?: CSSProperties;
    onDecode?: (result: string) => void;
    viewFinder?: (props: any) => ReactElement | null;
    hideCount?: boolean;
    tracker?: boolean;
    viewFinderBorder?: number;
    constraints?: MediaTrackConstraints;
    scanDelay?: number;
    deviceId?: string;
    hints?: Map<DecodeHintType, any>;
    stopDecoding?: boolean;
}
declare const QrScanner: (props: QrScannerProps) => React.JSX.Element;

declare const useMediaDevices: (constraints?: MediaTrackConstraints) => MediaTrackSettings[];

export { QrScanner, type QrScannerProps, useMediaDevices };
