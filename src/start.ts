// Single production entrypoint.
// Loading the survival bootstrap here keeps its main-thread patches in place
// without requiring Node to preload a generated bootstrap file via -r.
import './survival/workerBootstrap';
import './index';
