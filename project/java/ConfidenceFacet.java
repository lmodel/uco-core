package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  A confidence is a grouping of characteristics unique to an asserted level of certainty in the accuracy of some information.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class ConfidenceFacet extends Facet {

  private String confidence;

}