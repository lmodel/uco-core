package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  An annotation is an assertion made in relation to one or more objects.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class Annotation extends Assertion {

  private List<UcoObject> object;

}