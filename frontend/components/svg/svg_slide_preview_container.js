import { connect } from "react-redux";
import SVGSlide from "./svg_slide";

const SVGSlidePreviewContainer = connect(
  ({entities, ui}, ownProps) => ({
    isPreview: false,
    slide: entities.slides[ownProps.slideId],
    width: ui.pageWidth || 0,
    height: ui.pageHeight || 0
  }),
  (dispatch, ownProps) => ({
  })
)(SVGSlide);

export default SVGSlidePreviewContainer;