package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  An enclosing compilation is a container for a grouping of things.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class EnclosingCompilation extends Compilation {

  private List<UcoObject> object;

}