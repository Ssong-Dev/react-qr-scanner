import React from 'react';
import type { CSSProperties, ReactElement } from 'react';
import { DecodeHintType } from '@zxing/library';
import { OnErrorFunction, OnResultFunction } from '../types';
export interface QrScannerProps {
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
export declare const QrScanner: (props: QrScannerProps) => React.JSX.Element;
