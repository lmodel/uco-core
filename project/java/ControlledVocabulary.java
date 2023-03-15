package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  A controlled vocabulary is an explicitly constrained set of string values.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class ControlledVocabulary extends UcoObject {

  private String constrainingVocabularyReference;
  private String constrainingVocabularyName;
  private String value;

}