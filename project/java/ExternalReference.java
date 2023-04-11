package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  Characteristics of a reference to a resource outside of the UCO.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class ExternalReference extends UcoInherentCharacterizationThing {

  private String referenceURL;
  private String definingContext;
  private String externalIdentifier;

}