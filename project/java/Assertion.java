package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  An assertion is a statement declared to be true.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class Assertion extends UcoObject {

  private List<String> statement;

}