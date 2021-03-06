import * as React from 'react';
import { Omit, Sizes, SelectCallback } from 'react-bootstrap';
import * as CarouselItem from './CarouselItem';
import * as CarouselCaption from './CarouselCaption';

declare namespace Carousel {
    export type CarouselProps = Omit<React.HTMLProps<Carousel>, 'wrap'> & {
        activeIndex?: number;
        bsSize?: Sizes;
        bsStyle?: string;
        controls?: boolean;
        defaultActiveIndex?: number;
        direction?: string;
        indicators?: boolean;
        interval?: number;
        nextIcon?: React.ReactNode;
        onSelect?: SelectCallback;
        // TODO: Add more specific type
        onSlideEnd?: Function;
        pauseOnHover?: boolean;
        prevIcon?: React.ReactNode;
        slide?: boolean;
        wrap?: boolean;
    };
}
declare class Carousel extends React.Component<Carousel.CarouselProps> {
    public static Caption: typeof CarouselCaption;
    public static Item: typeof CarouselItem;
}
export = Carousel;
